import PropTypes from 'prop-types'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/seo'
import { clientRedirect, serverRedirect } from '../../lib/redirect'
import styles from '../../styles/pages/profile.module.scss'
import ProfileHeader from '../../components/Profile/profileHeader/profileHeader'


const UserProfile = ({ user }) => {
    return (
        <Layout>
            <SEO title={`${user.name} | Macebook`} />
            <div className={styles.container}>
                <ProfileHeader 
                    BGImg={user.picture} 
                    UserImg={user.picture} 
                    Name={user.name}
                    Location={user.location}
                    Position={user.name}
                />
                <img src={user.picture} alt="User"></img>
                <h1>{user.name}</h1>
                <address>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.location}</p>
                </address>
            </div>
        </Layout>
    )
}

UserProfile.propTypes = {
    user: PropTypes.object
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie

    const res = await fetch(`${process.env.API}/users/${ctx.params.username}`, {
        headers: {
            cookie
        }
    })

    if (res.status === 401 && !ctx.req) {
        clientRedirect('/login')
        return { props: {} }
    }

    if (res.status === 401 && ctx.req) {
        serverRedirect('/login')
        return { props: {} }
    }

    if (res.status === 404 && !ctx.req) {
        clientRedirect('/404')
        return { props: {} }
    }

    if (res.status === 404 && ctx.req) {
        serverRedirect('/404')
        return { props: {} }
    }

    const user = await res.json()
    return {
        props: { user }
    }
}
export default UserProfile
