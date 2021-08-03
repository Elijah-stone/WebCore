import Post from "./Post";
import Swiper from "./swiper-bundle.min"
import WebpackLogo from './assets/webpack-logo.png'
import './babel'




import './styles/style.css'
import './styles/variables.scss';
import './styles/absolute-container.scss';
import './styles/content-container.scss';

import './styles/header.scss';
import './styles/menu-logo_request-check.scss';
import './styles/buttons.scss';
import './styles/services.scss';
import './styles/services-header.scss';
import './styles/request-check.scss';
import './styles/list.scss';
import './styles/text-img-description.scss';
import './styles/swiper-bundle.min.css'
import './styles/brands.scss'
import './styles/slides.scss'
import './styles/brands-swiper.scss'
import './styles/species.scss'
import './styles/prices.scss'
import './styles/footer.scss'






import './styles/side-menu.scss';
import './styles/side-menu-top.scss';

import './styles/side-menu-list.scss';
import './styles/side-menu-bottom.scss';

import './styles/feedback.scss';
import './styles/callback.scss';




import './mobile-slider_script'
import './main-description'
import './species-slider-script'
import './side-menu'
import './feedback'
import './callback'
import './prices-slider'




const post = new Post('Webpack Post Title', WebpackLogo)
console.log('Post to String', post.toString())