import React from 'react'

const Project = ({ projectClass, image, title, description, tags, links }) => {
    return (
        <div className='project'>
            <div className={`project-display ${projectClass}`}>
                <img src={image} alt="spotify" className='project-image' />
            </div>
            <div className="project-information">
                <h2>
                    {title}
                </h2>
                <p className='project-description'>
                    {description}
                </p>
                <div className="tags">
                    {tags.map(tag => {
                        return (<div className="tag">{tag}</div>)
                    })}
                </div>
                {links && 
                (
                    <div className="project-links">
                        <a href={links[0]}><i className="fab fa-github project-link"></i></a>
                        <a href={links[1]}><i className="fas fa-external-link-alt project-link"></i></a>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Project
