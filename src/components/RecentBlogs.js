import React from "react";
import '../style.css'
import { SimpleGrid } from "@chakra-ui/react"
import RecentBlogCard from "./RecentBlogCard";
function RecentBlogs() {

    // Example data
    const Blogs = [
        {
            title: 'Pro CSGO Player Caught Cheating',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '30520',
            comments: '5',
            id: '1',
            tag: 'new',
            date: '10/10/2021'
        },
        {
            title: 'Pro CSGO Player Caught Cheating',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '30520',
            comments: '5',
            id: '2',
            tag: 'new',
            date: '10/10/2021'
        },
        {
            title: 'Pro CSGO Player Caught Cheating',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '30520',
            comments: '5',
            id: '3',
            tag: 'new',
            date: '10/10/2021'
        },
        {
            title: 'Pro CSGO Player Caught Cheating',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '30520',
            comments: '5',
            id: '4',
            tag: 'new',
            date: '10/10/2021'
        },
    ]
    return (
    <div style={styles.RecentBlogs} className="RecentBlogs">
        <p style={styles.title} className="font-reg primary-text" tabIndex={0}>RECENT BLOG POSTS</p>

        <SimpleGrid minChildWidth='300px' spacing="15px">
        {Blogs.map((Blogs) => (
            <RecentBlogCard key={Blogs.id} image={Blogs.image} title={Blogs.title} description={Blogs.description} views={Blogs.views} tag={Blogs.tag}/>
        ))}
        </SimpleGrid>
        

    </div>
    );
}

const styles = {
    RecentBlogs: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        
    },
    RecentBlogsCont: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '15px',
    },
    title:{
        fontSize: '35px',
    }
}

export default RecentBlogs;