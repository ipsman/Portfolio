'use client'

const NavLinks = () =>{
    function GoAnchor(num) {
        var height = (window.outerHeight * num) - (window.outerHeight - window.innerHeight);
        window.scrollTo(0, height);
    }

    const navigation = [
        { name: "Home", id: 'homeTitle', num: '0'},
        { name: "About Me", id: 'nabTitle', num: '1'},
        { name: "My projects", id: 'nhTitle', num: '2'},
        { name: "Contact", id: 'endTitle', num: '3'},
    ];

    const listItems = navigation.map(item =>
        <button className="px-3" onClick={() => GoAnchor(item.num)} id={item.id} key={item.name}>{item.name}</button>
    );

    return(
        <div className="inline gap-2">{listItems}</div>
    )
}
export default NavLinks;