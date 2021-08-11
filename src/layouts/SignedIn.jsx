import React from 'react'
import { Menu,Image,Dropdown } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media.istockphoto.com/vectors/profile-photo-user-icon-vector-id1073173288?k=6&m=1073173288&s=170667a&w=0&h=ZYCtuEV4QoiVHgqmSnzedQpRx-L7-8Pzu-UjmAu9yP4="/>
                <Dropdown pointing="top left" text="Furkan">
                   <Dropdown.Menu>
                       <Dropdown.Item text="Bilgilerim" icon="info"/>
                       <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                   </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    )
}
