

const handleImageUpload = async (file: string | Blob) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=fe4d5d7aa3790bece1a160fb8a9ed0cd",
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      console.log(data);

      return data.data;
    } catch (err) {
      console.log(err);
      
    }
  };
  export default handleImageUpload;

