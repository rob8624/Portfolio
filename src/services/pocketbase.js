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
    try {
        const data = await pb.collection('skills_logos').getList();
        
        // Assuming 'field' contains the array of logos
        const images = data.items[0].field; // Adjust this if needed

        // Generate URLs for each logo
        const logoUrls = images.map((filename) => 
            pb.files.getUrl(data.items[0], filename) // Use the correct record and filename
        );

        console.log('Logo URLs:', logoUrls);
        return logoUrls; // Return the array of URLs
    } catch (error) {
        console.error('Error fetching skills logos:', error);
    }
}

export default pb;


