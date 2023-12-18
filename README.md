# Terragoat-cdktf - Vulnerable CDK for Terraform Infrastructure

[![Maintained by Yassir.com](https://img.shields.io/badge/maintained%20by-Yassir-blueviolet)](https://yassir.com/?utm_source=github&utm_medium=organic_oss&utm_campaign=cdkgoat)

Terragoat-cdktf is Yassir's "Vulnerable by Design" CDKTF repository.
Terragoat-cdktf is a learning and training project that demonstrates how common configuration errors can find their way into production cloud environments.

It also shows how security tools such as checkov, trivy etc. can be used with CDKTF projects to provide automated vulnerability scanning at build time.

## Table of Contents


## Introduction

Terragoat-cdktf was built to enable DevSecOps design and implement a sustainable misconfiguration prevention strategy. It can be used to test a policy-as-code framework like [Bridgecrew](https://bridgecrew.io/?utm_source=github&utm_medium=organic_oss&utm_campaign=cdkgoat) & [Checkov](https://github.com/bridgecrewio/checkov/), inline-linters, or other code scanning methods executed at build / deploy time.

Terragoat-cdktf follows the tradition of existing *Goat projects that provide a baseline training ground to practice implementing secure development best practices for cloud infrastructure.

## Important notes

Before you proceed please take a not of these warning:
> :warning: Terragoat-cdktf creates intentionally vulnerable GCP resources into your account. **DO NOT deploy Terragoat-cdktf in a production environment or alongside any sensitive GCP resources.**

## Requirements

This project uses the following technologies.

* CDKTF
* Typescript
* NPM
* Checkov

To prevent vulnerable infrastructure from arriving to production see our IaC toolguides: [IaC Security Tools](https://www.notion.so/ysir/Security-Tools-aece87dd646a4f48a75112ca5414bd2e).

## Contributing

Contribution is welcomed!

We would love to add more vulnerable infrastructure-as-code design patterns.

## Support

If you need direct support you can contact us at [devx@yassir.com](mailto:devx@yassir.com).

## Existing misconfigs (Auto-Generated)
Existing misconfigurations can be viewed from the actions tab of the project repository
