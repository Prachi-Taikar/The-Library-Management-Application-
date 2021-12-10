function SomeBookHeading({section_title}) {
    return (
        <div className="some_book-heading-block">
            <div className="some_book-heading-block__container container">
                <h3 className="some_book-heading"> {section_title ? section_title : 'Section Name Here' } </h3>
            </div>
        </div>
    )
}

export default SomeBookHeading;