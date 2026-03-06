// helper functions for Cloudinary image optimization

/**
 * Insert transformation parameters into a Cloudinary URL.
 *
 * @param {string} url - original Cloudinary URL
 * @param {object} options - transformation options such as width, height, crop, q, f
 * @returns {string} optimized url with transformation string
 */
export function optimizeCloudinary(url, options = {}) {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  const parts = url.split("/upload/");
  const transformations = [];
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  if (options.q) transformations.push(`q_${options.q}`);
  if (options.f) transformations.push(`f_${options.f}`);
  if (transformations.length === 0) return url;
  return `${parts[0]}/upload/${transformations.join(",")}/${parts[1]}`;
}
