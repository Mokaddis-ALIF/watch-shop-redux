import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
	return (
		<>
			<footer class="footer section">
				<div class="footer__container container grid">
					<div class="footer__content">
						<h3 class="footer__title">Our information</h3>

						<ul class="footer__list">
							<li>1234 - Peru</li>
							<li>La Libertad 43210</li>
							<li>123-456-789</li>
						</ul>
					</div>
					<div class="footer__content">
						<h3 class="footer__title">About Us</h3>

						<ul class="footer__links">
							<li>
								<a href="#" class="footer__link">
									Support Center
								</a>
							</li>
							<li>
								<a href="#" class="footer__link">
									Customer Support
								</a>
							</li>
							<li>
								<a href="#" class="footer__link">
									About Us
								</a>
							</li>
							<li>
								<a href="#" class="footer__link">
									Copy Right
								</a>
							</li>
						</ul>
					</div>

					<div class="footer__content">
						<h3 class="footer__title">Product</h3>

						<ul class="footer__links">
							<li>
								<a href="#" class="footer__link">
									Road bikes
								</a>
							</li>
							<li>
								<a href="#" class="footer__link">
									Mountain bikes
								</a>
							</li>
							<li>
								<a href="#" class="footer__link">
									Electric
								</a>
							</li>
							<li>
								<a href="#" class="footer__link">
									Accesories
								</a>
							</li>
						</ul>
					</div>

					<div class="footer__content">
						<h3 class="footer__title">Social</h3>

						<ul class="footer__social">
							<a
								href="https://www.facebook.com/"
								rel="noreferrer"
								target="_blank"
								class="footer__social-link"
							>
								<BsFacebook />
							</a>

							<a
								href="https://twitter.com/"
								rel="noreferrer"
								target="_blank"
								class="footer__social-link"
							>
								<FiTwitter />
							</a>

							<a
								href="https://www.instagram.com/"
								rel="noreferrer"
								target="_blank"
								class="footer__social-link"
							>
								<AiOutlineInstagram />
							</a>
						</ul>
					</div>
				</div>

				<span class="footer__copy">&#169; Bedimcode. All rigths reserved</span>
			</footer>
		</>
	);
};

export default Footer;
