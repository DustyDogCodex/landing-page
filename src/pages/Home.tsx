import '../styles/Home.css';
import { useState, useRef } from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { GithubIcon, DiscordIcon, EmacsIcon, ObsidianIcon } from '../components/Icons';
import Waitlist from '../components/Waitlist';
import Icon from '@ant-design/icons';

export function Home() {
	const [showControls, setShowControls] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const handleMouseEnter = () => {
		setShowControls(true);
	};

	const handleMouseLeave = () => {
		setShowControls(false);
	};

	const handleEnded = () => {
		setShowControls(false);
	};

	return (
		<section className='core-page'>
			<h2 className='title'>Introducing Khoj</h2>
			<div className='product-description'>
				<div className="product-description-text">
					<p id="app-subtitle" className="product-description">
						An <b>open source</b> AI personal assistant for your digital brain.
					</p>
				</div>
				<video
					id="demo-video"
					autoPlay
					ref={videoRef}
					controls={showControls}
					onEnded={handleEnded}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<source src="https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/khoj-chat-demo.mp4" type="video/mp4" />
					Your browser may not support video
				</video>
				<div className="product-description-text top-section-links">
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							style={{borderRadius: '4px'}}
							ghost
							icon={<Icon component={GithubIcon} />}
							href="https://github.com/debanjum/khoj">
								See code on Github
						</Button>
					</div>
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							style={{borderRadius: '4px'}}
							ghost
							icon={<Icon component={DiscordIcon} />}
							href="https://discord.gg/5UhUG5fh">
								Join us on Discord
						</Button>
					</div>
				</div>
			</div>
			<div className='camping-image-container'>
				<div className='camping-image-subcontainer'>
					<img src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/hero_camping.svg' className='hero-camping' alt='hero-camping' />
				</div>
			</div>
			<section id="mission">
				<div id="mission" className='camping-block'>
					<div className="product-description">
						<div className='production-description-subcomponent camping-description-subcomponent'>
							<h2 className='production-description-subcomponent'>What is Khoj?</h2>
							<p className='product-description-subcomponent-light'>
								Khoj is an AI personal assistant that is designed with the intention of keeping you in control of your data. It works by connecting to your personal knowledge base and exposing interfaces to search and chat. You can give and revoke Khoj's access to your data at any time. We see Khoj as a tool that can help you build a digital brain that is an extension of your own. Imagine being able to chat with your notes, documents, images, email, and far more.
							</p>
							<p className='product-description-subcomponent-light'>
								Khoj started with the founding principle that it should be hostable on your own server. This means that it's completely private and personal, and that will always be the case.
							</p>
							<p className='product-description-subcomponent-light'>
								But we've heard the feedback, and we know that self-hosting is a blocker for several people who want to try Khoj. Managing servers and developer dependencies is tricky. We're working on a hosted version of Khoj that will be available for personal use. If you're interested in trying out Khoj on the cloud, please sign up for early access below.
							</p>
							<p className='product-description-subcomponent-light'>
								We're also working on creating a desktop application that will make installation as easy as clicking a button and running the application. This will eventually help people who want to self-host Khoj, but (like any sane person) don't want to deal with the hassle of managing their Python versions and dependencies.
							</p>
							<p className='product-description-subcomponent-light'>
								<b>We're in the thick of building and improving Khoj, and we want to hear from you.</b> Please join the <a className='inline-link-light' href="https://discord.gg/fP89zSJb">Discord</a> to voice your opinions and tell us about which features you'd like to see.
							</p>
							<Waitlist />
						</div>
					</div>
				</div>
			</section>
			<div id="chat" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Chat</h2>
					<p className='product-description-subcomponent-light'>
						Khoj exposes a conversational interface to your personal assistant. Carry out natural, multi-turn conversations with your personal assistant to create, reason and build on top of your existing knowledge.
					</p>
					<video
						id="demo-video"
						autoPlay
						ref={videoRef}
						controls={showControls}
						onEnded={handleEnded}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<source src="https://github.com/khojai/landing-page/assets/65192171/434299dd-378c-4aa7-a2b6-b1af6ec9acca" type="video/mp4" />
						Your browser may not support video
					</video>
				</div>
			</div>
			<div id="search" className='product-description'>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Search</h2>
					<p className='product-description-subcomponent-light'>
						Khoj supports lightning fast search, with results from your data sources appearing as you type. It generates embeddings that allow you to perform semantic search on your data. This means that you can search for things that are similar to what you're looking for, rather than exact or fuzzy matches. In the self-hosted version, this data never leaves your server.
					</p>
					<video
						id="demo-video"
						autoPlay
						ref={videoRef}
						controls={showControls}
						onEnded={handleEnded}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<source src="https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/khoj-search-demo.mp4" type="video/mp4" />
						Your browser may not support video
					</video>
				</div>
			</div>
			<div id="plugins" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Plugins</h2>
					<p className='product-description-subcomponent'>
						Our code supports integration of additional plugins for data sources and search interfaces, but we also maintain some first party plugins. We currently support two major plugins which we've built in-house, <a className='inline-link-light' href="https://www.gnu.org/software/emacs/">Emacs</a> and <a className='inline-link-light' href="https://obsidian.md/">Obsidian</a>. All of our products are available to use via the browser or the API as well.
					</p>
					<div className='supported-icons'>
						<EmacsIcon />
						<ObsidianIcon />
					</div>
				</div>
			</div>
			<div id="team" className="product-description">
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Team</h2>
					<div className='founders-text'>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
								<img className='founders-item-image' src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/deb_founder_bw.jpg' alt='Debanjum Singh' />
								<p className='founders-item-name'>Debanjum Singh Solanky</p>
							</div>
						</div>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
								<img className='founders-item-image' src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/saba_founder_bw.jpg' alt='Saba Imran' />
								<p className='founders-item-name'>Saba Imran</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="conclude" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<p className='product-description-subcomponent-light'>
						We know how hard it can be to search and engage with information across all the different platforms you use.
						We plan to fix this by making information from your chosen data sources accessible to you in a private and secure way.
					</p>
					<p className='product-description-subcomponent-light'>
						To learn more about the product, <Link className='inline-link-light' to="/about">click here</Link>.
					</p>
				</div>
			</div>

		</section>
	);
}

export default Home;