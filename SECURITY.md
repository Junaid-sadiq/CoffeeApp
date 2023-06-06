# Security Policy

## Supported Versions

Use this section to inform users about which versions of your project are currently supported with security updates.

| Version   | Supported          |
| --------- | ------------------ |
| 2.1.x     | :white_check_mark: |
| 2.0.x     | :x:                |
| < 2.0     | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously and appreciate your help in disclosing them responsibly. If you have identified a vulnerability in this project, please follow these steps to report it:

1. Go to the [Issues](https://github.com/your-repo/issues) section of this repository.
2. Click on the "New Issue" button.
3. Provide a descriptive title and include as much detail as possible about the vulnerability.
4. If applicable, provide steps to reproduce the vulnerability.
5. Submit the issue.

## Response and Disclosure

Once you have reported a vulnerability, we will review and investigate it promptly. We will strive to provide regular updates on the progress of the investigation and any actions taken.

If the vulnerability report is accepted and verified, we will work towards addressing it in a timely manner. We may contact you for additional information or clarification during this process.

If the vulnerability report is declined for any reason, we will provide a clear explanation for our decision.

## AWS Amplify Authentication

This project uses AWS Amplify for authentication. Please keep the following security considerations in mind when working with the authentication system:

1. **Keep sensitive information secure:** Avoid storing any sensitive information, such as IAM keys, directly in your codebase or version control system. Instead, use environment variables or a secure secrets management solution to store and retrieve sensitive information.
2. **Follow best practices for IAM roles and permissions:** Ensure that you have set up appropriate IAM roles and permissions for your AWS resources, including the AWS services used by AWS Amplify.
3. **Regularly review and update dependencies:** Keep your project's dependencies, including AWS Amplify and related packages, up to date by regularly checking for updates and applying them as recommended.
4. **Enable Multi-Factor Authentication (MFA):** Consider enabling MFA for your AWS accounts to provide an extra layer of security.

We encourage you to familiarize yourself with the [AWS Amplify Security Documentation](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html) for more detailed information on securing your Amplify applications.

We appreciate your efforts to improve the security of this project and encourage responsible disclosure of vulnerabilities. Thank you for helping us make our project safer.
