


function List(props) {
    const listContent = props.listItems.map((content) =>
        <div className='listItemStyle' key={content.toString()}>{content.listItem}</div>
    );

    return (
        <div className='listWrapperStyle'>{listContent}</div>
    );
}

export default List;