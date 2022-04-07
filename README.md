# Fastly Compute@Edge template kit for Rust

This repository's inital commit is generated by

- fasly CLI 1.7.1 (9bbfbfc)
    - Viceroy version: viceroy 0.2.2
- https://github.com/fastly/compute-starter-kit-rust-empty
    - https://github.com/fastly/compute-starter-kit-rust-empty/tree/89f07198f0fab7e3caf2ebaca5a962bee7baafda

And some changes are added to start to develop easily

- Bootstrap Cargo workspace.
- Add EditorConfig.


## Prerequisites

- Install [rustup](https://rustup.rs/)


## How to build

Run `make help`.


### Release Channel

The current build system supports _release channel_.
Now we define these release channels.

- `production`: **For production environment**.
- `canary`: **For Development environment**.

If you want to build the artifact for `production` release channel,
you should invoke `make build_release -j RELEASE_CHANNEL=production`.
By default, `RELEASE_CHANNEL` makefile variable is `canary`.

Additionaly, you can pass `ADDITIONAL_FEATURE` makefile variable (e.g. `make build_debug -j ADDITIONAL_FEATURE=barfoo`).
Then the artifact will be built with enabling `barfoo` feature.

Release channel is based on [Cargo's "features" mechanism](https://doc.rust-lang.org/cargo/reference/features.html).
