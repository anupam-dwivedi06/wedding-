import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log(PORT);
console.log(process.env.MONGO_URI)

// simple check for connection string
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in environment');
} else {
  // connect to mongo
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

// schema/model
const inquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneWhatsApp: String,
    location: String,
    date: Date,
    event: String,
    referralSource: String,
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// create inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (err) {
    console.error('Error saving inquiry', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// list all inquiries (admin)
app.get('/api/inquiries', async (req, res) => {
  try {
    const list = await Inquiry.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error('Error fetching inquiries', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
