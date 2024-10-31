import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.REACT_APP_POCKETBASE_URL); 
export const fetchHeaderData = async () => {
    const data = await pb.collection('Header_Details').getList();
    return data;
}

export const fetchHeroData = async () => {
    const data = await pb.collection('hero_details').getList();
    return data 
}

export const fetchSocialsData = async () => {
    const data = await pb.collection('Socials').getList();
    return data
}

export const fetchAboutData = async () => {
    const data = await pb.collection('about_details').getList();
    return data
}

export const fetchSkillsLogos = async () => {
   
        const data = await pb.collection('skills_logos').getList();
        
        const images = data.items.map((item) => (
            {
                url: pb.files.getUrl(item, item.field),
                title: item.name
            }));
        
        return images
}

export const fetchProjects = async () => {
    try {
        
        const data = await pb.collection('projects').getList();

        const projectsWithImages = data.items.map(project => {

            // Generate a URL-friendly slug from the title
            const titleSlug = project.title
          .toLowerCase()
          .replace(/\s+/g, '-')    // Replace spaces with hyphens
          .replace(/[^a-z0-9-]/g, '');  // Remove special characters


            return {
                ...project,
                titleSlug,
                imageUrl: pb.files.getUrl(project, project.image) 
            };
        });
         
        return projectsWithImages; 

    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Handle the error as needed
    }

   
};

fetchProjects()



export default pb;


// export const fetchSkillsLogos = async () => {
//     try {
//         const data = await pb.collection('skills_logos').getList();
        
//         // Assuming 'field' contains the array of logos
//         const images = data.items[0].field; // Adjust this if needed

//         // Generate URLs for each logo
//         const logoUrls = images.map((filename) => 
//             pb.files.getUrl(data.items[0], filename) // Use the correct record and filename
//         );

//         console.log('Logo URLs:', logoUrls);
//         return logoUrls; // Return the array of URLs
//     } catch (error) {
//         console.error('Error fetching skills logos:', error);
//     }
// }


