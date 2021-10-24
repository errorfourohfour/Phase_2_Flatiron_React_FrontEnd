export default function List({listItems}) {
    return (
        <div>
            <ol>
                {listItems.map(item => <li key={item.id}>{item.name}</li>)}
            </ol>
        </div>
    )
}
