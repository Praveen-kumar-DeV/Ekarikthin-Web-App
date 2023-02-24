const cloudinary = require("cloudinary").v2;

exports.getImages = async (req, res) => {
  try {
    const images = await cloudinary.search
      .expression("folder:Home")
      .max_results(110)
      .execute();

    const data = images.resources;
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
   
    res.status(200).json({
      success: true,
      images: data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.cloudurl = async (req, res) => {

const searchOptions = {expression: 'folder:Home', sort_by: 'public_id', order: 'desc'};
cloudinary.search
  .expression(searchOptions.expression)
  .max_results(110)
  .execute()
  .then(result => {
    const imageUrls = result.resources.map(resource => resource.url);
   
    res.json(imageUrls);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Internal server error');
  });}