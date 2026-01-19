import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Privacy Policy | Molebi App',
	description:
		'Molebi App Privacy Policy - Learn how we collect, use, share, and safeguard your personal data.',
};

export default function PrivacyPolicyPage() {
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
						Molebi App Privacy Policy
					</h1>

					<p className="text-gray-600 mb-8">
						<strong>Effective Date:</strong> January 1, 2026
						<br />
						<strong>Last Updated:</strong> January 1, 2026
					</p>

					<p className="text-gray-700 leading-relaxed">
						At Molebi Inc., we are committed to protecting your privacy. Molebi
						App is a science-driven cultural platform designed to protect,
						preserve, and connect families through cultural heritage. This
						Privacy Policy explains how we collect, use, share, and safeguard
						personal data when you use our website, mobile application, and
						related services (collectively, the &quot;Services&quot;).
					</p>

					<p className="text-gray-700 leading-relaxed">
						This Privacy Policy is written in clear language and complies with
						the Delaware Personal Data Privacy Act (DPDPA) and applicable United
						States federal laws.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						1. Information We Collect
					</h2>
					<p className="text-gray-700 leading-relaxed">
						We collect personal data to operate Molebi, support family and
						cultural connections, and improve our Services.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Information You Provide
					</h3>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Name, email address, and contact details</li>
						<li>Account registration information</li>
						<li>
							Profile information you choose to share (such as family
							connections, lineage details, cultural identifiers, or heritage
							narratives)
						</li>
						<li>
							Content you upload or submit, including text, images, documents,
							or records related to family or cultural history
						</li>
						<li>Communications with customer support</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Information We Collect Automatically
					</h3>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>IP address and device identifiers</li>
						<li>Browser type, operating system, and app usage data</li>
						<li>Pages viewed, interactions, and referring URLs</li>
						<li>Cookies and similar tracking technologies</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Information from Third Parties
					</h3>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							Account authentication or verification data (where applicable)
						</li>
						<li>
							Analytics data to understand platform usage and performance
						</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						2. How We Use Your Information
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						We use personal data to:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Provide, operate, and maintain the Molebi platform</li>
						<li>Create and manage user accounts</li>
						<li>Enable family, cultural, and heritage connections</li>
						<li>
							Preserve and organize user-contributed cultural or family records
						</li>
						<li>
							Improve platform functionality, accuracy, and user experience
						</li>
						<li>
							Conduct research, analytics, and platform optimization (in
							aggregated or de-identified forms)
						</li>
						<li>
							Communicate with you about updates, features, or support requests
						</li>
						<li>Send informational or community-related communications</li>
						<li>Send marketing communications, where permitted by law</li>
						<li>
							Secure the platform, prevent misuse, and comply with legal
							obligations
						</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						We do not use personal data for purposes that are incompatible with
						Molebi&apos;s cultural and protective mission.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						3. How We Share Information
					</h2>
					<p className="text-gray-700 leading-relaxed font-semibold">
						We do not sell personal data.
					</p>
					<p className="text-gray-700 leading-relaxed">
						We may share personal data only as described below:
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Service Providers
					</h3>
					<p className="text-gray-700 leading-relaxed mb-4">
						We work with trusted service providers that help us operate the
						platform, such as:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Cloud hosting and data storage providers</li>
						<li>Security and infrastructure vendors</li>
						<li>Analytics and performance tools</li>
						<li>Customer support platforms</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						These providers are contractually required to use personal data only
						to provide services to Molebi and to protect it.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Affiliates
					</h3>
					<p className="text-gray-700 leading-relaxed">
						We may share personal data with our parent company, subsidiaries, or
						affiliated entities for internal operations and platform
						development.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Legal and Business Transfers
					</h3>
					<p className="text-gray-700 leading-relaxed mb-4">
						We may disclose personal data:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>To comply with applicable laws or lawful government requests</li>
						<li>
							To protect the rights, safety, and integrity of Molebi and its
							users
						</li>
						<li>
							In connection with a merger, acquisition, restructuring, or sale
							of assets
						</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						4. How to Exercise Your Rights
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						You may submit a privacy request using one of the following methods:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							<strong>Email:</strong>{' '}
							<a
								href="mailto:info@molebiapp.com"
								className="text-[#004000] hover:text-[#DB6F23] underline"
							>
								info@molebiapp.com
							</a>
						</li>
						<li>
							<strong>User Account Settings:</strong> where available
						</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						We will respond within 45 days, as required by the DPDPA. This
						period may be extended where reasonably necessary.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Appeals Process
					</h3>
					<p className="text-gray-700 leading-relaxed">
						If we deny your request, you may appeal by contacting:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
						<li>
							<strong>Email:</strong>{' '}
							<a
								href="mailto:support@molebiapp.com"
								className="text-[#004000] hover:text-[#DB6F23] underline"
							>
								support@molebiapp.com
							</a>
						</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						We will respond to appeals within 60 days. If your appeal is denied,
						you may contact the Delaware Department of Justice.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						5. Advertising and Opt-Out Choices
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Molebi Inc. does not sell personal data. If targeted advertising is
						introduced in the future, users will be provided with clear notice
						and opt-out options.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						6. Cookies and Tracking Technologies
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						We use cookies and similar technologies to:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Ensure the platform functions properly</li>
						<li>Remember user preferences</li>
						<li>Understand how the Services are used</li>
						<li>Improve reliability and performance</li>
					</ul>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						7. Sensitive Personal Data
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Molebi does not intentionally collect sensitive personal data unless
						it is necessary to provide requested Services and permitted by law.
						Where required, we obtain <strong>explicit opt-in consent</strong>{' '}
						before processing such data.
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						Users remain in control of the personal and cultural information
						they choose to share.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						8. Children&apos;s Privacy
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Molebi is not directed at children under the age of 13. We do not
						knowingly collect personal data from children under 13 in compliance
						with the Children&apos;s Online Privacy Protection Act (COPPA).
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						If you believe a child has provided personal data, please contact us
						so we can take appropriate action.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						9. Data Security
					</h2>
					<p className="text-gray-700 leading-relaxed">
						We implement reasonable administrative, technical, and physical
						safeguards to protect personal data, including access controls,
						encryption, and secure infrastructure. While no system can be
						guaranteed to be completely secure, we take data protection
						seriously.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						10. Data Retention
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						We retain personal data only for as long as necessary to:
					</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>Provide and support the Molebi platform</li>
						<li>Preserve user-requested cultural or family records</li>
						<li>Comply with legal and regulatory obligations</li>
					</ul>
					<p className="text-gray-700 leading-relaxed mt-4">
						Retention periods depend on the nature and purpose of the data.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						11. Changes to This Privacy Policy
					</h2>
					<p className="text-gray-700 leading-relaxed">
						We may update this Privacy Policy from time to time. Any changes
						will be reflected by updating the &quot;Last Updated&quot; date.
						Material changes will be communicated through the Services or other
						appropriate means.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						12. Governing Law
					</h2>
					<p className="text-gray-700 leading-relaxed">
						This Privacy Policy is governed by the laws of the State of Delaware
						and applicable United States federal laws, without regard to
						conflict-of-law principles.
					</p>

					<h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
						13. Contact Us
					</h2>
					<p className="text-gray-700 leading-relaxed">
						If you have questions or concerns about this Privacy Policy or
						Molebi&apos;s data practices, contact us at:
					</p>
					<div className="mt-4 p-6 bg-gray-50 rounded-lg">
						<p className="font-semibold text-gray-900">MOLEBI, INC.</p>
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
						href="/terms-of-service"
						className="text-[#004000] hover:text-[#DB6F23] underline"
					>
						View Terms of Service
					</Link>
				</div>
			</div>
		</div>
	);
}
