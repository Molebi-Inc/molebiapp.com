import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Terms of Service | Molebi App',
	description:
		'Molebi App Terms of Service - Legal terms and conditions for using our platform.',
};

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-4xl mx-auto px-6 py-12">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-[#004000] hover:text-[#DB6F23] mb-8 transition-colors"
				>
					<ArrowLeft size={20} />
					<span>Back to Home</span>
				</Link>

				<article className="prose prose-lg max-w-none">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Molebi App Terms of Service
					</h1>
					<p className="text-xl text-gray-600 mb-6">
						Legal Information &amp; Notices
					</p>

					<p className="text-gray-600 mb-8">
						<strong>Effective Date:</strong> January 1, 2026
						<br />
						<strong>Last Updated:</strong> January 1, 2026
					</p>

					<p className="text-gray-700 leading-relaxed">
						These Terms and Conditions of Use (the &quot;Terms of Use&quot;)
						apply to the Molebi app located at{' '}
						<a
							href="https://molebiapp.com"
							className="text-[#004000] hover:text-[#DB6F23] underline"
						>
							https://molebiapp.com
						</a>{' '}
						and all associated sites linked to https://molebiapp.com by Molebi
						Inc., its subsidiaries, and affiliates. The App is the property of
						Molebi Inc. (&quot;Molebi App&quot;) and its licensors. BY USING THE
						APP, YOU AGREE TO THESE TERMS OF USE; IF YOU DO NOT AGREE, DO NOT
						USE THE APP.
					</p>

					<p className="text-gray-700 leading-relaxed">
						Molebi Inc. reserves the right, at its sole discretion, to modify
						these Terms at any time. Changes are effective upon posting. Your
						continued use of the Services constitutes acceptance of the updated
						Terms.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						1. Purpose of the Services
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						Molebi is a living digital archive for families. We provide tools
						that help families:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							Build collaborative family trees enriched with photos, audio, and
							written stories
						</li>
						<li>
							Preserve traditions, milestones, and memories across generations
						</li>
						<li>Invite relatives to contribute and stay connected</li>
						<li>Control privacy and sharing of family content</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						The Services are designed for personal, non-commercial family use.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						2. Ownership of the Services and Content
					</h2>
					<p className="text-gray-700 leading-relaxed">
						All software, design, features, and functionality of the Services,
						including text, graphics, interfaces, logos, and code (collectively,
						&quot;Molebi Content&quot;) are owned by or licensed to Molebi Inc.
						and are protected by copyright, trademark, and other intellectual
						property laws.
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						Except as expressly permitted by these Terms, no part of the
						Services may be copied, modified, distributed, reverse-engineered,
						or exploited without Molebi&apos;s prior written consent.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						3. User-Generated Content
					</h2>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						A. Your Content
					</h3>
					<p className="text-gray-700 leading-relaxed mb-4">
						You retain ownership of the content you upload or create through the
						Services, including:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Photos, videos, audio recordings</li>
						<li>Written stories, notes, and family records</li>
						<li>Family tree information and milestones</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						By submitting content, you grant Molebi Inc. a limited,
						non-exclusive, royalty-free licence to host, store, display, and
						process such content solely for the purpose of operating and
						improving the Services.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						B. Family &amp; Collaborative Content
					</h3>
					<p className="text-gray-700 leading-relaxed mb-4">
						Some features allow shared or collaborative contributions. You
						acknowledge that:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							Content shared with family members may be viewed, added to, or
							interacted with by invited users
						</li>
						<li>
							You are responsible for choosing what you share and with whom
						</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						4. Acceptable Use
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						You agree not to use the Services to:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							Upload unlawful, harmful, abusive, defamatory, or infringing
							content
						</li>
						<li>Upload content you do not have the right to share</li>
						<li>Violate the privacy or rights of others</li>
						<li>Impersonate another person or misrepresent affiliations</li>
						<li>Interfere with or disrupt the Services or servers</li>
						<li>Attempt to gain unauthorized access to accounts or systems</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						Molebi App may remove content or suspend accounts that violate these
						Terms.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						5. Accounts, Passwords, and Security
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						Certain features require creating an account. You are responsible
						for:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Maintaining the confidentiality of your login credentials</li>
						<li>All activity occurring under your account</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						You agree to notify Molebi immediately of any unauthorised access or
						security breach. Molebi Inc. is not liable for losses resulting from
						your failure to secure your account.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						6. Privacy
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Your use of the Services is subject to Molebi&apos;s{' '}
						<Link
							href="/privacy-policy"
							className="text-[#004000] hover:text-[#DB6F23] underline"
						>
							Privacy Policy
						</Link>
						, which explains how we collect, use, and protect personal data.
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						The Privacy Policy is incorporated into these Terms by reference.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						7. Storage, Availability, and Preservation
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						Molebi App is designed to preserve family histories, but:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							We do not guarantee uninterrupted access or permanent availability
							of content
						</li>
						<li>We may impose reasonable storage limits or retention policies</li>
						<li>
							You are encouraged to maintain personal backups of important
							materials
						</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						8. Third-Party Links and Services
					</h2>
					<p className="text-gray-700 leading-relaxed">
						The Services may include links to third-party websites or services.
						Molebi app does not control or endorse third-party content and is
						not responsible for their practices. Your interactions with third
						parties are at your own risk.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						9. Disclaimers
					</h2>
					<div className="bg-gray-50 p-6 rounded-lg">
						<p className="text-gray-700 leading-relaxed font-semibold">
							THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
							AVAILABLE&quot;.
						</p>
						<p className="text-gray-700 leading-relaxed mt-4">
							MOLEBI APP DOES NOT GUARANTEE THAT THE SERVICES WILL BE
							ERROR-FREE, UNINTERRUPTED, OR MEET YOUR EXPECTATIONS.
						</p>
						<p className="text-gray-700 leading-relaxed mt-4">
							TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOLEBI INC. DISCLAIMS ALL
							WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
							MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
							NON-INFRINGEMENT.
						</p>
					</div>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						10. Limitation of Liability
					</h2>
					<div className="bg-gray-50 p-6 rounded-lg">
						<p className="text-gray-700 leading-relaxed">
							TO THE EXTENT PERMITTED BY LAW, MOLEBI SHALL NOT BE LIABLE FOR ANY
							INDIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
							DAMAGES, INCLUDING LOSS OF DATA, MEMORIES, OR CONTENT.
						</p>
					</div>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						11. Indemnification
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						You agree to indemnify and hold harmless Molebi Inc. and its
						officers, directors, employees, and affiliates from any claims,
						losses, liabilities, or expenses arising from:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Your use of the Services</li>
						<li>Your content</li>
						<li>Your violation of these Terms</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						12. Termination
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						Molebi may suspend or terminate your access to the Services at any
						time, with or without notice, if:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>You violate these Terms</li>
						<li>Required by law</li>
						<li>The Services are discontinued</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						You may terminate your account at any time through account settings.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						13. Governing Law and Dispute Resolution
					</h2>
					<p className="text-gray-700 leading-relaxed">
						These Terms are governed by the laws of the State of Delaware and
						applicable U.S. federal laws, without regard to conflict-of-law
						principles.
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						Any dispute arising out of or relating to these Terms or the
						Services shall be brought exclusively in the state or federal courts
						located in Delaware, unless otherwise required by law.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						14. Miscellaneous
					</h2>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							These Terms constitute the entire agreement between you and Molebi
							Inc. regarding the Services
						</li>
						<li>
							If any provision is held unenforceable, the remaining provisions
							remain in effect
						</li>
						<li>Failure to enforce any rights is not a waiver</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						15. Feedback
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Any feedback or suggestions you provide may be used by Molebi
						without obligation or compensation.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						16. Contact Information
					</h2>
					<div className="mt-4 p-6 bg-gray-50 rounded-lg">
						<p className="font-semibold text-gray-900">MOLEBI INC.</p>
						<p className="text-gray-700 mt-2">
							<strong>Address:</strong> 3422 Old Capitol Trail, Suite 700,
							County of New Castle, City of Wilmington 19808-6192, Delaware, USA
						</p>
						<p className="text-gray-700 mt-2">
							<strong>Email:</strong>{' '}
							<a
								href="mailto:molebi.inc@gmail.com"
								className="text-[#004000] hover:text-[#DB6F23] underline"
							>
								molebi.inc@gmail.com
							</a>
						</p>
						<p className="text-gray-700 mt-2">
							<strong>Website:</strong>{' '}
							<a
								href="https://molebiapp.com"
								className="text-[#004000] hover:text-[#DB6F23] underline"
							>
								https://molebiapp.com
							</a>
						</p>
					</div>
				</article>

				<div className="mt-12 pt-8 border-t border-gray-200">
					<Link
						href="/privacy-policy"
						className="text-[#004000] hover:text-[#DB6F23] underline"
					>
						View Privacy Policy
					</Link>
				</div>
			</div>
		</div>
	);
}
