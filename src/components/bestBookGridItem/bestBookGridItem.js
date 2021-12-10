function BestBookGridItem({title, src}) {
    return (
        <li>
            <a href="https://google.com">
                <img className="audiobook_img" src={src} alt={title} />
            </a>
        </li>
    )
}

export default BestBookGridItem;