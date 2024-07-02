import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import OptionOne from "../components/OptionOne"
import OptionTwo from "../components/OptionTwo"
import OptionThree from "../components/OptionThree"
import OptionFour from "../components/OptionFour"

const routes = [{
	path:"/",
	name: 'HelloWorld',
	component:HelloWorld
},{
	path:'/OptionOne',
	name:'OptionOne',
	compoent:OptionOne
},{
	path:'/OptionTwo',
	name:'OptionTwo',
	compoent:OptionTwo
},{
	path:'/OptionThree',
	name:'OptionThree',
	compoent:OptionThree
},{
	path:'/OptionFour',
	name:'OptionFour',
	compoent:OptionFour
}];

const router = createRouter({
	history:createWebHashHistory(process.env.BASE_URL),
	routes,
	mode: 'history',
});

export default router;