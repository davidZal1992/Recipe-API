<template>
  <mdb-navbar id=mynav expand="large" dark color="elegant-color-dark">
    <mdb-navbar-brand href="#">
     <router-link to='/#'> <span> <font-awesome-icon icon="utensils"/> </span> <span style="font-size:25px">Hamburgesa</span></router-link>
    </mdb-navbar-brand>
    <mdb-navbar-nav left v-if=!$root.store.username>
     <mdb-nav-item class="seperator" id=a href="#" active><span><font-awesome-icon icon="search"/></span><router-link to="/search"> Search</router-link></mdb-nav-item>
        <mdb-nav-item class="seperator" href="#"><span><font-awesome-icon icon="user-plus"/></span>About</mdb-nav-item>
           <mdb-nav-item class="seperator" href="#"><span><font-awesome-icon icon="sign-in-alt"/></span>Login</mdb-nav-item>
        <mdb-nav-item class="seperator" href="#"><span><font-awesome-icon icon="user-plus"/></span>Register</mdb-nav-item>
    </mdb-navbar-nav>
    <mdb-navbar-nav left v-else>
     <mdb-nav-item class="seperator" id=a href="#" active><span><font-awesome-icon icon="search"/></span><router-link to="/search"> Search</router-link></mdb-nav-item>
        <mdb-nav-item class="seperator" href="#"><span><font-awesome-icon icon="user-plus"/></span>About</mdb-nav-item>
    </mdb-navbar-nav>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right v-if=!$root.store.username>
        <mdb-nav-item class="seperator" >Hi Guest !</mdb-nav-item>
      </mdb-navbar-nav>
        <mdb-navbar-nav right v-else>
        <mdb-nav-item class="seperator" style="margin-top:3px" >Hi dav1992 !</mdb-nav-item>
           <mdb-dropdown tag="li" class="nav-item" >
          <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed><img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
            class="rounded-circle z-depth-0"
            alt="avatar image"
            height="30"
          /></mdb-dropdown-toggle>
          <mdb-dropdown-menu color="elegant">
            <mdb-dropdown-item><router-link to="/myfavorite"> My Favorite Recipes </router-link></mdb-dropdown-item>
            <mdb-dropdown-item><router-link to="/myrecipes">My Private Recipe</router-link></mdb-dropdown-item>
           <mdb-dropdown-item> <router-link to="/myfamily">My Family Recipe</router-link></mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item v-on:click="signout">  Sign-out</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<style scoped>
/* navigation bar */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

#mynav{
font-family: 'Noto Sans KR', sans-serif;   
border-bottom: 1px outset white;
box-shadow: 0px 15px 20px  rgb(0, 0, 0);
position:fixed;
height: 65px;       
left:0;       
top:0;           
width:100vw;   
z-index:200;  
}

span{
    margin-right: 10px;
}

.seperator{
    display: inline;
    margin-right: 1rem;
  margin-top:3px;
    filter: drop-shadow(0.5px 12px 15.5px rgb(255, 255, 255));
}
</style>


<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'Navbar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    },
    methods:{
      async signout(){
        try{
        this.$root.store.logout()
        const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/auth/logout",{withCredentials:true})
        console.log(response)
        if(this.$route.name==='landing')
        window.location.reload()
        else
        this.$router.push('/')
        }
        catch(err){
        console.log(err)
        }

      }
    }
  }
</script>