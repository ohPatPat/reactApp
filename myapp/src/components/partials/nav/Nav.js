export const Nav = (props) => {
    return (
        <nav>
            <ul>
                {props.navigation.map((item, key) => {
                    return (
                        <li key={key}><a href="#">{item}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}