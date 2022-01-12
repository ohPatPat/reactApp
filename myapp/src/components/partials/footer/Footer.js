export const Footer = (props) => {
    return (
        <footer>
                <ul>
                    {props.navigation.map((item, key) => {
                        return (
                            <li key={key}><a href="#">{item}</a></li>
                        )
                    })}
                </ul>

        </footer >
    )
}