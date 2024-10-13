const imgbb_hosting_img = import.meta.env.VITE_IMG_HOST;
const hosted_img_url = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_img}`;

const useImgBB = async (formData) => {
    fetch(hosted_img_url, {
        method: "POST",
        body: formData,
    })
        .then((res) => res.json())
        .then((imgResponse) => {
            if (imgResponse.success) {
                const coverImageUrl = imgResponse.data.display_url;
                return coverImageUrl;
            }
        });
}

export default useImgBB;