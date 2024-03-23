# Changelog

## [26.4.1](https://github.com/flxbl-io/sfops/compare/v26.4.0...v26.4.1) (2024-03-23)


### Bug Fixes

* **wr-30mins:** update name of job ([0857d8b](https://github.com/flxbl-io/sfops/commit/0857d8bd4e95cc208b12e2996133d757171bd607))

## [26.4.0](https://github.com/flxbl-io/sfops/compare/v26.3.1...v26.4.0) (2024-03-22)


### Features

* **lock:** add additional info on which one is locked ([131c38c](https://github.com/flxbl-io/sfops/commit/131c38ce8cd21212d5337a06632625097debdcda))
* **sfp:** update to 38.1.0 for performant validation ([8037aba](https://github.com/flxbl-io/sfops/commit/8037abad609ebb8b38325836fdbb1138a7eb9bf4))
* **sfp:** update to v38.1.2 for upstream sfp changes ([ef7061d](https://github.com/flxbl-io/sfops/commit/ef7061d5270088b89ed454d35393f399ccce81ad))


### Bug Fixes

* **cicd:** add an option for alpha customers ([6d46f3c](https://github.com/flxbl-io/sfops/commit/6d46f3c4087b8f22a5ac782fbd5157d6bc0c8ccc))
* **fetchsandbox:** fix incorrect loging while waiting for assigned sandbox ([5f772e8](https://github.com/flxbl-io/sfops/commit/5f772e8b0835838aee58374e37938aa4de7e1ea5))
* **fetchsandbox:** fix issue finally where fetch is not timing out ([35d5bc5](https://github.com/flxbl-io/sfops/commit/35d5bc5c0ff1f0764f75f7cbad12ae1e43edea42))
* **fetchSandbox:** update error logs ([9e0152f](https://github.com/flxbl-io/sfops/commit/9e0152f6d60d2e4e24f89d76f4ce14a593c4907c))
* **pmd:** fix pmd to a specific version ([2892477](https://github.com/flxbl-io/sfops/commit/2892477cbab899eb6768b7a7f31717cb47326748))
* **pr-validate:** add missing names for steps ([13e5b9d](https://github.com/flxbl-io/sfops/commit/13e5b9d5c60c93df264fcb270f00544a8a30a9b2))
* **sfp:** rollback to 38.1.2 ([53fe769](https://github.com/flxbl-io/sfops/commit/53fe76948b77539b34c3d2213af7c5188f45b201))
* **sfp:** update sfp to v38.2.3 ([a6d3adb](https://github.com/flxbl-io/sfops/commit/a6d3adb93497302f7de3297d73941ccea05af1ed))
* **sfp:** update to latest sfp ([9c48177](https://github.com/flxbl-io/sfops/commit/9c48177be94103eaba98fdd9c5984ce2150aac02))
* **sfp:** update to v38.2.1 ([cf59536](https://github.com/flxbl-io/sfops/commit/cf59536f060974acfeb08ded67dbe3b1cc290052))
* **validate:** reduce timeouts on waits ([e69b213](https://github.com/flxbl-io/sfops/commit/e69b213b11e06fd5a997d9220de441aef7a652db))
* **wf-validate:** move to sha ([fa03f3f](https://github.com/flxbl-io/sfops/commit/fa03f3f20ff46da7d524f7919edf195b07385a40))

## [26.3.1](https://github.com/flxbl-io/sfops/compare/v26.3.0...v26.3.1) (2024-03-19)


### Bug Fixes

* **push-to-branch:** add continue-on-error on to remove current assignment ([932d091](https://github.com/flxbl-io/sfops/commit/932d09164b8a18acb767826be7da671d8215069e))

## [26.3.0](https://github.com/flxbl-io/sfops/compare/v26.2.2...v26.3.0) (2024-03-18)


### Features

* **sfp:** increment to 37.1.3 ([b80499d](https://github.com/flxbl-io/sfops/commit/b80499d8545c8454343aa43d97ae89d62a64ddf6))


### Bug Fixes

* **cicd:** add an alpha tag ([5327062](https://github.com/flxbl-io/sfops/commit/53270621653fad9e84932b7bba61046b82b01e91))
* **cicd:** change dependency to alpha ([d84fadb](https://github.com/flxbl-io/sfops/commit/d84fadb99887def92c2b98b5119dcc3059045f15))

## [26.2.2](https://github.com/flxbl-io/sfops/compare/v26.2.1...v26.2.2) (2024-03-18)


### Bug Fixes

* **auth:** switch to sfops auth to delete scratch orgs ([f8ee811](https://github.com/flxbl-io/sfops/commit/f8ee8111919bd910ba829804b13f5e04261afe8a))
* **lock:** change randomness between 30 to 100 seconds ([28de771](https://github.com/flxbl-io/sfops/commit/28de77136b0f65e91f5ea5487966670a2f1bd069))
* **sfp:** update to sfp March 24 ([b07382c](https://github.com/flxbl-io/sfops/commit/b07382cb3a320c00cdb32c0d8494509f40f74867))

## [26.2.1](https://github.com/flxbl-io/sfops/compare/v26.2.0...v26.2.1) (2024-03-18)


### Bug Fixes

* **sbx-pools:** fix sbx name not retured to reassign sandbox ([6ab541d](https://github.com/flxbl-io/sfops/commit/6ab541d64f65c28efedd4725be52911c9ec464f3))

## [26.2.0](https://github.com/flxbl-io/sfops/compare/v26.1.3...v26.2.0) (2024-03-18)


### Features

* **sbx-pool:** Allow to return back to pool ([51522a7](https://github.com/flxbl-io/sfops/commit/51522a72d42339a451b7062c04cbebe2aa6b9ffe))


### Bug Fixes

* **lockResource:** update message to provide more details ([7683adf](https://github.com/flxbl-io/sfops/commit/7683adfe3ece525bc120d6d4fe1ba5bf158bb2ce))
* **sbx-pools:** handle isActive while returning to pool as well as log messages ([e092a00](https://github.com/flxbl-io/sfops/commit/e092a009b80d97c66b15664702a664cfb7b508eb))

## [26.1.3](https://github.com/flxbl-io/sfops/compare/v26.1.2...v26.1.3) (2024-03-18)


### Bug Fixes

* **act-auth:** remove dependency on sf ([12982da](https://github.com/flxbl-io/sfops/commit/12982da7f7937602055dd21ad59f5ac089f93ede))

## [26.1.2](https://github.com/flxbl-io/sfops/compare/v26.1.1...v26.1.2) (2024-03-15)


### Bug Fixes

* **wf-build:** revert to full image ([532c8d7](https://github.com/flxbl-io/sfops/commit/532c8d7faa92edb3de727227f91c59566ea18761))

## [26.1.1](https://github.com/flxbl-io/sfops/compare/v26.1.0...v26.1.1) (2024-03-15)


### Bug Fixes

* **sfp-artifact-installer:** use revised sfp commands ([7c15f41](https://github.com/flxbl-io/sfops/commit/7c15f413f5c7ffc1b9f9fa17fa5c204f1d66aafb))

## [26.1.0](https://github.com/flxbl-io/sfops/compare/v26.0.0...v26.1.0) (2024-03-15)


### Features

* **wf-build:** move to faster docker image ([3c60d4e](https://github.com/flxbl-io/sfops/commit/3c60d4e2137f5f45bc2fccadc27cc3c762bb463b))


### Bug Fixes

* update changelog to be accurate ([61c10a7](https://github.com/flxbl-io/sfops/commit/61c10a706a2e451e1ee5848fdb9822a072277250))

## [26.0.0](https://github.com/flxbl-io/sfops/compare/v25.25.0...v26.0.0) (2024-03-15)


### Features

* **publish:** add a continue on error to enable retry on publish ([c84f058](https://github.com/flxbl-io/sfops/commit/c84f058e59fd424ceb457bdd13c7a2101c3a0a11))
* **sfops-cli:** update to 1.5.0 ([db4fec6](https://github.com/flxbl-io/sfops/commit/db4fec60b0feb69bba70520149783321b072e69a))


## [25.25.0](https://github.com/flxbl-io/sfops/compare/v25.24.2...v25.25.0) (2024-03-15)


### Features

* **publish:** add a continue on error to enable retry on publish ([c84f058](https://github.com/flxbl-io/sfops/commit/c84f058e59fd424ceb457bdd13c7a2101c3a0a11))
* **sfops-cli:** update to 1.5.0 ([db4fec6](https://github.com/flxbl-io/sfops/commit/db4fec60b0feb69bba70520149783321b072e69a))

## [25.24.2](https://github.com/flxbl-io/sfops/compare/v25.24.1...v25.24.2) (2024-03-14)


### Bug Fixes

* **act-checksandboxstatus:** add additional logging ([b2cf316](https://github.com/flxbl-io/sfops/commit/b2cf316ee882ec2b21fe0dbf369b10df4d0be3c5))
* **cicd:** remove trigger on every push ([f2770c6](https://github.com/flxbl-io/sfops/commit/f2770c6adf186da7b1acbd56916e6c075341f553))

## [25.24.1](https://github.com/flxbl-io/sfops/compare/v25.24.0...v25.24.1) (2024-03-14)


### Bug Fixes

* **act-checksandboxStatus:** fix incorrect dereference ([0078df8](https://github.com/flxbl-io/sfops/commit/0078df8dcf54e93533d363fff2c820f1e9f66049))

## [25.24.0](https://github.com/flxbl-io/sfops/compare/v25.23.4...v25.24.0) (2024-03-14)


### Features

* **sfops-cli:** update to 1.4.3 ([a7822b4](https://github.com/flxbl-io/sfops/commit/a7822b4ce57db38afe8ccef9f2e4ad9b5dcc81a5))


### Bug Fixes

* **act-checkSandboxStatus:** fix incorrect alias and add error messages ([1ca3319](https://github.com/flxbl-io/sfops/commit/1ca33197f3b2c609c20dce8aaf613c64cf4b047f))

## [25.23.4](https://github.com/flxbl-io/sfops/compare/v25.23.3...v25.23.4) (2024-03-14)


### Bug Fixes

* **wf-apex-test:** fix incorrect $ before env name ([96abb67](https://github.com/flxbl-io/sfops/commit/96abb6776ce82adce1ee2d16c3870d488f983338))

## [25.23.3](https://github.com/flxbl-io/sfops/compare/v25.23.2...v25.23.3) (2024-03-14)


### Bug Fixes

* **wf-apextest:** ensure sbx name is respected by apex tests ([47a4157](https://github.com/flxbl-io/sfops/commit/47a4157cb532cd364e82760d28b640699f48feb2))

## [25.23.2](https://github.com/flxbl-io/sfops/compare/v25.23.1...v25.23.2) (2024-03-14)


### Bug Fixes

* **auth:** remove devhub_username output from actions ([25592e2](https://github.com/flxbl-io/sfops/commit/25592e2d935e9989ea54cf498ba03f532c4e6638))

## [25.23.1](https://github.com/flxbl-io/sfops/compare/v25.23.0...v25.23.1) (2024-03-14)


### Bug Fixes

* **wf-pre-release:** change to sfops lite image for faster response ([c2cdc41](https://github.com/flxbl-io/sfops/commit/c2cdc4169751119379e799eb7b04735889dee603))

## [25.23.0](https://github.com/flxbl-io/sfops/compare/v25.22.12...v25.23.0) (2024-03-14)


### Features

* **act-checksandboxstatus:** move to sfops cli for user creation ([5828e86](https://github.com/flxbl-io/sfops/commit/5828e86a4c1669f24591e643ad781842a476045f))
* **sfops-cli:** update to 1.4.0 ([807dbaa](https://github.com/flxbl-io/sfops/commit/807dbaa4d30e156e781fb0786abd5e1bd98c5243))


### Bug Fixes

* **act-checkcisandbox:** remove build of create all users ([c47804e](https://github.com/flxbl-io/sfops/commit/c47804e3b1f0e00f68ffef3e73f0a437b47506c1))
* add trivy to docker build ([9baa1f4](https://github.com/flxbl-io/sfops/commit/9baa1f4dd4ea3340c497a7ab293ac882e47dd3f1))
* **cicd:** ensure release-please is only triggered on merge ([d58cd61](https://github.com/flxbl-io/sfops/commit/d58cd616b335fc13d65867a21a659bf651294b93))

## [25.22.12](https://github.com/flxbl-io/sfops/compare/v25.22.11...v25.22.12) (2024-03-13)


### Bug Fixes

* **sfops-cli:** update version to 1.3.1 ([acfcdc2](https://github.com/flxbl-io/sfops/commit/acfcdc291a9fead74d211132951a5db448058a21))

## [25.22.11](https://github.com/flxbl-io/sfops/compare/v25.22.10...v25.22.11) (2024-03-13)


### Bug Fixes

* **sfops-cli:** update to 1.3.0 ([5cfaeb5](https://github.com/flxbl-io/sfops/commit/5cfaeb5af6a35c034ed9e260f0a6e77577734844))

## [25.22.10](https://github.com/flxbl-io/sfops/compare/v25.22.9...v25.22.10) (2024-03-13)


### Bug Fixes

* **act-checkcisandboxstatus:** fix incorrect dereference ([d5611ba](https://github.com/flxbl-io/sfops/commit/d5611ba2e54b77ccbd3fc33d1941efdd5e099a7d))

## [25.22.9](https://github.com/flxbl-io/sfops/compare/v25.22.8...v25.22.9) (2024-03-13)


### Bug Fixes

* **wf-pr-validate:** move to sfops for login ([e79e2f7](https://github.com/flxbl-io/sfops/commit/e79e2f7fe1d2efb2c9cfc6b9e5dcf2c34e6b2be6))

## [25.22.8](https://github.com/flxbl-io/sfops/compare/v25.22.7...v25.22.8) (2024-03-13)


### Bug Fixes

* **wf-elevate:** fix messages used while elevating ([654c308](https://github.com/flxbl-io/sfops/commit/654c308afdbe535763e7ff88f21601076b711072))

## [25.22.7](https://github.com/flxbl-io/sfops/compare/v25.22.6...v25.22.7) (2024-03-12)


### Bug Fixes

* **wf-validate:** rollback to sf login ([8f1b75c](https://github.com/flxbl-io/sfops/commit/8f1b75c4aeff73303dbc0998963841bf158870cc))

## [25.22.6](https://github.com/flxbl-io/sfops/compare/v25.22.5...v25.22.6) (2024-03-12)


### Bug Fixes

* **wf-build:** fix incorrect build command ([db130e2](https://github.com/flxbl-io/sfops/commit/db130e205e0265915372684057e04732dbb28018))

## [25.22.5](https://github.com/flxbl-io/sfops/compare/v25.22.4...v25.22.5) (2024-03-12)


### Bug Fixes

* **wf-build:** add skipifalready installed to build/deploy ([2e79419](https://github.com/flxbl-io/sfops/commit/2e7941904e625d4d744f9ad3f08c804bbec7771d))

## [25.22.4](https://github.com/flxbl-io/sfops/compare/v25.22.3...v25.22.4) (2024-03-12)


### Bug Fixes

* **wf-build:** fix issue with sfp do not having the shortcode -r on changelog ([509ec40](https://github.com/flxbl-io/sfops/commit/509ec406e84cd79c68f9f16d195861e1032b0ea3))

## [25.22.3](https://github.com/flxbl-io/sfops/compare/v25.22.2...v25.22.3) (2024-03-12)


### Bug Fixes

* **act-authtoenv:** fix incorrect alias derefrencing ([9086970](https://github.com/flxbl-io/sfops/commit/908697009001fc75b2626d927226848d11853444))

## [25.22.2](https://github.com/flxbl-io/sfops/compare/v25.22.1...v25.22.2) (2024-03-12)


### Bug Fixes

* **wf-elevate:** fix the path to actions that used for elevate ([cdbfd80](https://github.com/flxbl-io/sfops/commit/cdbfd80facbc014530bb2394b900afc4c1112d32))

## [25.22.1](https://github.com/flxbl-io/sfops/compare/v25.22.0...v25.22.1) (2024-03-12)


### Bug Fixes

* **act-checkcisandboxstatus:** use devhub alias as opposed to incorrect variable ([3269450](https://github.com/flxbl-io/sfops/commit/3269450e6de0e24286b76cdbe5892ad416da20e6))

## [25.22.0](https://github.com/flxbl-io/sfops/compare/v25.21.6...v25.22.0) (2024-03-12)


### Features

* **act-checksandboxstatus:** move to sfops for faster processing of sandbox status ([c718ba3](https://github.com/flxbl-io/sfops/commit/c718ba319a9ac988246fb6c36c20caf2cd2eb8e2))
* **act-deletesandbox:** move to sfops delete sandbox ([2bc3859](https://github.com/flxbl-io/sfops/commit/2bc3859ed2ee5cd53ea067e78a91d30915928f15))
* **act-wf-all:** update to sfops login and switch to light images for faster executions ([d3d1b50](https://github.com/flxbl-io/sfops/commit/d3d1b501b533aa86b0bede6562d779c4aa0c6931))
* **docker:** add sfops cli to images ([6847263](https://github.com/flxbl-io/sfops/commit/6847263bfbfe2f5d60ceb328bcff140fdc69e1c5))
* **docker:** ensure only provided sfops cli version is used ([1f08506](https://github.com/flxbl-io/sfops/commit/1f0850657837e3d0b8fce51ee2d37a9eb557b937))
* **sfops-cli:** use only release tagged versions ([76e7cf2](https://github.com/flxbl-io/sfops/commit/76e7cf24dc79fcc1737d941609bc6c938ed83f38))
* **wf-acceslevel:** Add workflow for handling elevated access level requests ([61628dd](https://github.com/flxbl-io/sfops/commit/61628ddb23a413cd6bd26eee4d98802eeef6425e))
* **wf-sandbox:** change to lite version for faster execution ([2ec9c34](https://github.com/flxbl-io/sfops/commit/2ec9c34d380060df4f19d6823a34202ae973b5ea))


### Bug Fixes

* **act-checkcisandboxstatus:** move to sfops cli based auth ([f708127](https://github.com/flxbl-io/sfops/commit/f7081274d5924e71eed533efb73b284ee3c40b1c))
* **act-checkCiSandboxStatus:** reduce average creation time ([f708127](https://github.com/flxbl-io/sfops/commit/f7081274d5924e71eed533efb73b284ee3c40b1c))
* **act-closestale:** fix missing path in github action trigger ([c4f8e05](https://github.com/flxbl-io/sfops/commit/c4f8e057759c20b6617be858bd02c7184572e788))
* **act-refreshfrontdoorurl:** switch to sfops cli auth ([f56e27e](https://github.com/flxbl-io/sfops/commit/f56e27e503f8bf7c78b1218072a8dc6d30a5b3fc))
* **act-wf-all:** update to  correct usage of docker container string ([46a1770](https://github.com/flxbl-io/sfops/commit/46a1770096f4816fb423c5472b30325dde840d4a))
* **cicd:** fix docker image token ([04427f3](https://github.com/flxbl-io/sfops/commit/04427f3196185703b564cd575b8c766973c1c0f4))
* **cicd:** fix github token ([dab4798](https://github.com/flxbl-io/sfops/commit/dab4798b762f43d7d260f5444b1be90741d72a88))
* **ci:** externalize version of image used during build ([68907c4](https://github.com/flxbl-io/sfops/commit/68907c49b807689830b84af0b7fae61d1181a886))
* **ci:** revert to version in code for better traceability ([69f9bba](https://github.com/flxbl-io/sfops/commit/69f9bba52b4e79b1faf1e50f2206536193228c9f))
* **docker:** add pnpm for building sfops cli ([78e425b](https://github.com/flxbl-io/sfops/commit/78e425b73c09230f14801488e07dfb68a9d16d95))
* **docker:** fix position of ARGS ([68a79ad](https://github.com/flxbl-io/sfops/commit/68a79ad4e5e8c209f8a388943139f809fa860090))
* **docker:** update docker files with redeclaration of ARG ([b0b1f5f](https://github.com/flxbl-io/sfops/commit/b0b1f5fbccaa9eba5bdc73908dfa500fc45a21a7))
* **sfops:** update to 1.2.2 which handles sandbox error ([8c54436](https://github.com/flxbl-io/sfops/commit/8c54436a936d03c8f3764b6c7d67cb51dbf5a543))
* **wf-elevate:** typos and labels ([1dc3269](https://github.com/flxbl-io/sfops/commit/1dc3269d88a05f1d2c2389769fc1108dad566bc7))
* **wf-elevate:** update to sfops cli 1.1.0 ([e8148dc](https://github.com/flxbl-io/sfops/commit/e8148dcad9b143f298f808f677126cad2d1a740f))
* **wf-issue-analyzer:** remove delete/test delete as it has hit too many limits ([53e7988](https://github.com/flxbl-io/sfops/commit/53e7988322843dd9beaef62190c8e07601d43fd8))
* **wf-validate:** use sfops to authenticate to org ([cf14466](https://github.com/flxbl-io/sfops/commit/cf14466d3f5120b1e77d09b6c597c7097f9bfec3))

## [25.21.6](https://github.com/flxbl-io/sfops/compare/v25.21.5...v25.21.6) (2024-03-01)


### Bug Fixes

* **wf-hotfix:** fix hotfix workflows due to an issue with sfp ([3d0acd7](https://github.com/flxbl-io/sfops/commit/3d0acd7b7b0adbeab70b7faa8db37e460d4df54a))

## [25.21.5](https://github.com/flxbl-io/sfops/compare/v25.21.4...v25.21.5) (2024-02-29)


### Bug Fixes

* **sfp:** upgrade to 36.0.9 of sfp ([d7f591f](https://github.com/flxbl-io/sfops/commit/d7f591f74ef6cc63de82e86ea7316d54e18def5d))

## [25.21.4](https://github.com/flxbl-io/sfops/compare/v25.21.3...v25.21.4) (2024-02-29)


### Bug Fixes

* **act-deleteSandbox:** fix incorrect login command used ([63316ba](https://github.com/flxbl-io/sfops/commit/63316bae242ece8310f1f362324cbbdc392b13b7))
* **sfp:** update sfp to 36.0.9 for upstream fixes ([c1228c3](https://github.com/flxbl-io/sfops/commit/c1228c35ec2a53a5adc9e6a351a80f349cc8b02c))

## [25.21.3](https://github.com/flxbl-io/sfops/compare/v25.21.2...v25.21.3) (2024-02-28)


### Bug Fixes

* **sfp:** update to 36.0.7 ([953cb97](https://github.com/flxbl-io/sfops/commit/953cb97496423772bff7f205bc043ae54077a5b0))

## [25.21.2](https://github.com/flxbl-io/sfops/compare/v25.21.1...v25.21.2) (2024-02-28)


### Bug Fixes

* **act-checkcisandboxstatus:** add better error handling for user creation ([d37b5c0](https://github.com/flxbl-io/sfops/commit/d37b5c04f38933efffa33b3feda7481eb47b690c))
* **docker:** update sfp to 36.0.6 for https://github.com/flxbl-io/sfp/issues/25 ([1103fbe](https://github.com/flxbl-io/sfops/commit/1103fbec4797ceb18e73ac03991b10fcba7e140c))

## [25.21.1](https://github.com/flxbl-io/sfops/compare/v25.21.0...v25.21.1) (2024-02-27)


### Bug Fixes

* **sfp:** update to v36.0.4 for sfp ([093d0e8](https://github.com/flxbl-io/sfops/commit/093d0e8caa90680e87ed1d63a83d921a8ad4e164))

## [25.21.0](https://github.com/flxbl-io/sfops/compare/v25.20.1...v25.21.0) (2024-02-27)


### Features

* **cicd:** add seggregation between development and latest images ([84f79dd](https://github.com/flxbl-io/sfops/commit/84f79dd2a8cdb2536d6650053c596b0192f828f6))
* **cicd:** build with exact version of sfp images ([2ecf17b](https://github.com/flxbl-io/sfops/commit/2ecf17be1afc9214078b28402ad46e8b577cedfb))


### Bug Fixes

* **cicd:** add a needs of development to tag image stage ([3520f20](https://github.com/flxbl-io/sfops/commit/3520f20975dbc8b5e84d9e0a3bf30bda22c62d5b))
* **cicd:** fix the name of workflow to a generic one as this is generic ([823f0c0](https://github.com/flxbl-io/sfops/commit/823f0c09a776a95a4adeb37c261a74704c81b642))
* **docs:** update readme with instructions on update ([1b9d355](https://github.com/flxbl-io/sfops/commit/1b9d355039b72d91b268fa3ae891443e8916aa06))
* **sfp:** update command usage references to sfp as aligned sfp february version ([96859fe](https://github.com/flxbl-io/sfops/commit/96859fe1f73cf3c01cfa5690f0f05965e09c7f57))
* **sf:** update usage of sf cli to  sf org  login  sfdx-url ([e106bce](https://github.com/flxbl-io/sfops/commit/e106bce9007fbf7d3e346dac7c6878a66ab6f839))
* **wf-validate:** remove deprecated variable used in sfp ([69e943d](https://github.com/flxbl-io/sfops/commit/69e943db6d0105936133eacbeedecf921ff8f4c7))

## [25.20.1](https://github.com/flxbl-io/sfops/compare/v25.20.0...v25.20.1) (2024-02-22)


### Bug Fixes

* **act-createcisandbox:** handle error code 1 when file is locked by sf cli ([10fbe0f](https://github.com/flxbl-io/sfops/commit/10fbe0f596ee2b418cb729f633e4382e6a7432e8))
* **act-reportgithubmetrics:** fix pagination causing issues with metrics not reported correctly ([8d6159b](https://github.com/flxbl-io/sfops/commit/8d6159be5dd5f3ad4c86b86828f54f554e7aad20))

## [25.20.0](https://github.com/flxbl-io/sfops/compare/v25.19.3...v25.20.0) (2024-02-22)


### Features

* **sfp:** core update to Feb24 version of sfp for flow automation ([fc3d042](https://github.com/flxbl-io/sfops/commit/fc3d0421c2f5a71f1d7ff6d7a019f376aea56c48))

## [25.19.3](https://github.com/flxbl-io/sfops/compare/v25.19.2...v25.19.3) (2024-02-20)


### Bug Fixes

* **act-checkcisandbox:** add log grouping to make logs concise ([1f9c9b1](https://github.com/flxbl-io/sfops/commit/1f9c9b1ffab2f8cfdfd668f4b456b94b28e206aa))
* **act-createsandbox:** add log grouping ([ff8d130](https://github.com/flxbl-io/sfops/commit/ff8d130a9718dcc7b7280f2846b9761ffdd4e8c3))

## [25.19.2](https://github.com/flxbl-io/sfops/compare/v25.19.1...v25.19.2) (2024-02-20)


### Bug Fixes

* **act-createcisandbox:** handle error code 1, when cli gets locked during parallel execution ([442b824](https://github.com/flxbl-io/sfops/commit/442b8243b44879f8b922a29e07c69d3415c5b284))

## [25.19.1](https://github.com/flxbl-io/sfops/compare/v25.19.0...v25.19.1) (2024-02-20)


### Bug Fixes

* **act-updategitrepo:** add a timeoout to all terminal operations ([af26986](https://github.com/flxbl-io/sfops/commit/af269865f399213ba802c156f1eb8f9df4950b49))

## [25.19.0](https://github.com/flxbl-io/sfops/compare/v25.18.0...v25.19.0) (2024-02-20)


### Features

* **dc-eyeview:** filter by packages by clicking on package header ([d706d8c](https://github.com/flxbl-io/sfops/commit/d706d8ce2ba8584b22f3e912b4b32b47da6020a6))


### Bug Fixes

* **act-fetchsandbox, act-expire:** fix logs to denote assignment time ([f64b82d](https://github.com/flxbl-io/sfops/commit/f64b82d473b31eb1e645e108767c0e93a4248d2d))

## [25.18.0](https://github.com/flxbl-io/sfops/compare/v25.17.1...v25.18.0) (2024-02-16)


### Features

* **dc-eyeview:** add additional icons to denote status of PRs ([71b6d84](https://github.com/flxbl-io/sfops/commit/71b6d842fca078d852eedb2aa1f577725e72ef74))

## [25.17.1](https://github.com/flxbl-io/sfops/compare/v25.17.0...v25.17.1) (2024-02-15)


### Bug Fixes

* **wf-pushtobranch:** build workflow time not getting reported ([c491bb6](https://github.com/flxbl-io/sfops/commit/c491bb6a6c996089873ff6421cc10adcd2ffb3c4))

## [25.17.0](https://github.com/flxbl-io/sfops/compare/v25.16.7...v25.17.0) (2024-02-14)


### Features

* **dc-releasecandidate:** add multi-domain release into individual sandbox ([cd67ea5](https://github.com/flxbl-io/sfops/commit/cd67ea524077a199faad8c007e84306fd2b52a52))
* **dc,act-eyeview:** add conflict markers for PRs that have same components ([501f86c](https://github.com/flxbl-io/sfops/commit/501f86ca29677b4dda1f2ad6f8b4b8f82f521536))


### Bug Fixes

* **dc-eyeview:** ensure closed pr items are marked as well ([a635d5e](https://github.com/flxbl-io/sfops/commit/a635d5e2cc8e15b77cf602b693f17b56b09100bb))

## [25.16.7](https://github.com/flxbl-io/sfops/compare/v25.16.6...v25.16.7) (2024-02-14)


### Bug Fixes

* **act-releasetoorgmapreporter:** ensure all release logs that are part of the release is copied ([cf62272](https://github.com/flxbl-io/sfops/commit/cf62272dafe6d16f6c06dded592f007efae1c744))

## [25.16.6](https://github.com/flxbl-io/sfops/compare/v25.16.5...v25.16.6) (2024-02-14)


### Bug Fixes

* **wf-release:** handle incorrect labelling on the issue ([ed15553](https://github.com/flxbl-io/sfops/commit/ed15553c3d9442103788104351719c2b6367d386))

## [25.16.5](https://github.com/flxbl-io/sfops/compare/v25.16.4...v25.16.5) (2024-02-13)


### Bug Fixes

* **dc-releasecandidate:** fix button title used in workitem calculator ([d320240](https://github.com/flxbl-io/sfops/commit/d32024041ad1429c25f9d285fec03ae2c5d5e380))

## [25.16.4](https://github.com/flxbl-io/sfops/compare/v25.16.3...v25.16.4) (2024-02-13)


### Bug Fixes

* **dc-releasecandidates:** fix workitems displayed across all available release candidates ([a87dc36](https://github.com/flxbl-io/sfops/commit/a87dc36170d5c6ea266489c238a84fbc54d03a0d))

## [25.16.3](https://github.com/flxbl-io/sfops/compare/v25.16.2...v25.16.3) (2024-02-13)


### Bug Fixes

* **dc-releasecandidates:** fix button title used ([4e8fa0f](https://github.com/flxbl-io/sfops/commit/4e8fa0faab1c5d9d6fb49ad101b23acdfaf7cf6f))

## [25.16.2](https://github.com/flxbl-io/sfops/compare/v25.16.1...v25.16.2) (2024-02-13)


### Bug Fixes

* **dc-releasecandidates:** display independent work items belonging to other RC ([613faf0](https://github.com/flxbl-io/sfops/commit/613faf0eb10fe6c1d69b9b3da86ecf5f6a791b07))

## [25.16.1](https://github.com/flxbl-io/sfops/compare/v25.16.0...v25.16.1) (2024-02-13)


### Bug Fixes

* **actions:** add continue on error to release-to-an-env ([e855ae5](https://github.com/flxbl-io/sfops/commit/e855ae5b11c9a0c870c04decdb09ab36de074df1))

## [25.16.0](https://github.com/flxbl-io/sfops/compare/v25.15.1...v25.16.0) (2024-02-13)


### Features

* **dc-releasecandidates:** display workitems impacted by selection of linked release candidates ([f189f51](https://github.com/flxbl-io/sfops/commit/f189f5146b206b4a056c632de0a2fb37bdd6c534))

## [25.15.1](https://github.com/flxbl-io/sfops/compare/v25.15.0...v25.15.1) (2024-02-13)


### Bug Fixes

* **db-releasecandidates:** fix release candidates details not being displayed ([f625b54](https://github.com/flxbl-io/sfops/commit/f625b540bda3a45f611fd96febd6bf2072d51969))
* **snapshot:** revise styling to make it concise ([386010e](https://github.com/flxbl-io/sfops/commit/386010ed9c8f957acacd84b8728dfdebf0e42857))

## [25.15.0](https://github.com/flxbl-io/sfops/compare/v25.14.2...v25.15.0) (2024-02-12)


### Features

* **release:** add support for releasing multiple domains in one transaction ([e442677](https://github.com/flxbl-io/sfops/commit/e44267796837e2d86713448d2f2858942233f2e9))


### Bug Fixes

* **act-findReleaseDefn:** fix incorrect syntax used in findReleaseDefns ([6845e8a](https://github.com/flxbl-io/sfops/commit/6845e8a7fc8fd3d2cab7eb03d8e846d59cc413d9))
* **templates:** ensure a placeholder is added to request-a-release template ([8b97463](https://github.com/flxbl-io/sfops/commit/8b974633f190bc7efbb1c258934962407d743f2f))
* **wf-releases:** pass the arguments as string into release workflows ([b1e3955](https://github.com/flxbl-io/sfops/commit/b1e3955c79557ab41352d2d895eefa883b6940c5))

## [25.14.2](https://github.com/flxbl-io/sfops/compare/v25.14.1...v25.14.2) (2024-02-12)


### Bug Fixes

* **dashboard:** fix selector not getting highlighted in navbar when directly navigated ([96edacb](https://github.com/flxbl-io/sfops/commit/96edacbe9a0c68055267b2209ca7c5c35a8a80f6))

## [25.14.1](https://github.com/flxbl-io/sfops/compare/v25.14.0...v25.14.1) (2024-02-11)


### Bug Fixes

* **dasbhoard:** fix sizing used of cards in 100% view ([6b50ce0](https://github.com/flxbl-io/sfops/commit/6b50ce00cf7e4c1f2d7952f2903474dc6d728d85))

## [25.14.0](https://github.com/flxbl-io/sfops/compare/v25.13.0...v25.14.0) (2024-02-11)


### Features

* **dashboard:** add info cards to orgComparison view ([8e901bf](https://github.com/flxbl-io/sfops/commit/8e901bfb03b8682802dbf1b0894f3a99190f3045))

## [25.13.0](https://github.com/flxbl-io/sfops/compare/v25.12.1...v25.13.0) (2024-02-11)


### Features

* **dashboard:** display a changelog in the website ([963e1ed](https://github.com/flxbl-io/sfops/commit/963e1edea8ba3be552eb29f3533eab82eba21772))


### Bug Fixes

* **ci:** add changelog as the default readme ([ab32005](https://github.com/flxbl-io/sfops/commit/ab32005c16350df1d149ec4a4d34e9a0a3c5df61))
* **dashboard:** fix link to stylesheet ([4979401](https://github.com/flxbl-io/sfops/commit/49794011d5ce9531c47a5333cc1a690d48724236))
* **dashboard:** remove incorrect rendering of list view in impacted component view ([672fbde](https://github.com/flxbl-io/sfops/commit/672fbde721aee9b43cf2c15a42779dbadb9c4a55))

## [25.12.1](https://github.com/flxbl-io/sfops/compare/v25.12.0...v25.12.1) (2024-02-09)


### Bug Fixes

* **actions:** fix pr status reporter to normalize paths before comparison ([c964e5c](https://github.com/flxbl-io/sfops/commit/c964e5c4dd9364a8b900549e58a7f05256a71d36))

## [25.12.0](https://github.com/flxbl-io/sfops/compare/v25.11.2...v25.12.0) (2024-02-09)


### Features

* **dashboard:** add a metadata component centric view ([b1116de](https://github.com/flxbl-io/sfops/commit/b1116deecaabd6a4ac4600c8fe0601465a16a027))


### Bug Fixes

* **dashboard:** change menu title of eyeview ([d9c2096](https://github.com/flxbl-io/sfops/commit/d9c2096a3437e9431e6201e53603a135cafff6f2))

## [25.11.2](https://github.com/flxbl-io/sfops/compare/v25.11.1...v25.11.2) (2024-02-06)


### Bug Fixes

* **actions:** releaselogsReporter, ensure files are only copied if it exists ([7bbcab2](https://github.com/flxbl-io/sfops/commit/7bbcab2cbc24a78dfeefa89e5dca6245f96f477f))
* **actions:** releaseToOrgMapReporter, remove incorrect script being used to commit ([8a84f46](https://github.com/flxbl-io/sfops/commit/8a84f46ac5b09a5bc58411b5bfd002fae1ccdeaf))

## [25.11.1](https://github.com/flxbl-io/sfops/compare/v25.11.0...v25.11.1) (2024-02-05)


### Bug Fixes

* **actions:** remove the use of the basePath ([5144588](https://github.com/flxbl-io/sfops/commit/5144588fadebf959b3b34e9688cd630f15e6987c))

## [25.11.0](https://github.com/flxbl-io/sfops/compare/v25.10.6...v25.11.0) (2024-02-05)


### Features

* **actions:** add information about changed components, package and type in PR metadata ([2c0367c](https://github.com/flxbl-io/sfops/commit/2c0367c21b1af26ab8727979cb12325dda2b0e5b))


### Bug Fixes

* **actions:** fix incorrect path used in prStatusReporter ([e05b1d7](https://github.com/flxbl-io/sfops/commit/e05b1d72a89afb400b51692143d6ed943b48dbd1))
* **actions:** invoke SF_DISABLE_LOG on prStatusReporter ([1545c84](https://github.com/flxbl-io/sfops/commit/1545c846c96dd74637a279dbbd22e9d300d8ee9a))
* **actions:** use current workding directory as the path for processing PR ([4b65303](https://github.com/flxbl-io/sfops/commit/4b65303c265c807b4d0069981cc2860789b17a7d))

## [25.10.6](https://github.com/flxbl-io/sfops/compare/v25.10.5...v25.10.6) (2024-02-04)


### Bug Fixes

* **actions:** fix GithubMetrics Reporter with multiple items ([e9498af](https://github.com/flxbl-io/sfops/commit/e9498af752c7ca837ac37c9a1e554d5bc8eb7cff))
* **actions:** fix incorrect syntax ([50b1977](https://github.com/flxbl-io/sfops/commit/50b1977fa153a15d60085dfc9999589964bd2e03))
* **workflows-build:** update build workflow to fail fast ([f7f0893](https://github.com/flxbl-io/sfops/commit/f7f08937c83f44b001f5fb21c989c6e2a9ffd6fb))

## [25.10.5](https://github.com/flxbl-io/sfops/compare/v25.10.4...v25.10.5) (2024-02-02)


### Bug Fixes

* **workflow:** remove use of containers in merge status job ([c920c7e](https://github.com/flxbl-io/sfops/commit/c920c7e55e9445250e5bace5ce241daa2c458b65))

## [25.10.4](https://github.com/flxbl-io/sfops/compare/v25.10.3...v25.10.4) (2024-02-01)


### Bug Fixes

* **actions:** remove aliasfy package from duplicate detection ([e500aa1](https://github.com/flxbl-io/sfops/commit/e500aa121946a2a7e3b7d31831d4d201a566384a))

## [25.10.3](https://github.com/flxbl-io/sfops/compare/v25.10.2...v25.10.3) (2024-02-01)


### Bug Fixes

* **workflow:** ensure badges are removed before adding it back ([5459769](https://github.com/flxbl-io/sfops/commit/5459769c9909f49846456affcfff520d800e2521))

## [25.10.2](https://github.com/flxbl-io/sfops/compare/v25.10.1...v25.10.2) (2024-02-01)


### Bug Fixes

* **actions:** use non deprecated variable ([81b0600](https://github.com/flxbl-io/sfops/commit/81b06008450b590a0d001f465c9d8e343e96b794))

## [25.10.1](https://github.com/flxbl-io/sfops/compare/v25.10.0...v25.10.1) (2024-02-01)


### Bug Fixes

* **workflows:** add an option to continue-on-error as its a new feature ([5dfc6c4](https://github.com/flxbl-io/sfops/commit/5dfc6c4c267ab36ccca03e9c2195e2b687281e5e))

## [25.10.0](https://github.com/flxbl-io/sfops/compare/v25.9.0...v25.10.0) (2024-02-01)


### Features

* **actions:** introduce a metadata scanner ([13b56d7](https://github.com/flxbl-io/sfops/commit/13b56d79ce62abf103316d2bb1b729c0ff425dbf))


### Bug Fixes

* **actions:** enhance duplicate scanner with better logs ([459ea82](https://github.com/flxbl-io/sfops/commit/459ea82d3aaa6a7ac93cf24b2eb242a0d7915a8b))
* **dashboard:** accomdate whether a shared work item is already released ([3a3df3f](https://github.com/flxbl-io/sfops/commit/3a3df3f7b62769fb615b01688a688bc5575fdce0))

## [25.9.0](https://github.com/flxbl-io/sfops/compare/v25.8.1...v25.9.0) (2024-01-31)


### Features

* **dashboard:** add headers to workitem tables ([e41897a](https://github.com/flxbl-io/sfops/commit/e41897ac8b2d182d5a7c7de8344afc20ebe8ffae))

## [25.8.1](https://github.com/flxbl-io/sfops/compare/v25.8.0...v25.8.1) (2024-01-31)


### Bug Fixes

* **dashboard:** fix icons and status used in workitems ([bec4a3e](https://github.com/flxbl-io/sfops/commit/bec4a3eed05096a33a40d618f0becf77b55c9d06))

## [25.8.0](https://github.com/flxbl-io/sfops/compare/v25.7.0...v25.8.0) (2024-01-30)


### Features

* **workitems:** enhanced workitems with updated status and view of runs ([cde9729](https://github.com/flxbl-io/sfops/commit/cde97298a92077b787f3688488b52163b5b528b8))


### Bug Fixes

* **actions:** fix incorrect position of invocation ([aee16e5](https://github.com/flxbl-io/sfops/commit/aee16e5622739e7e2aad2a0c80b9856e8fdb06ac))
* **actions:** fix status used in github issues ([b07ed2a](https://github.com/flxbl-io/sfops/commit/b07ed2aa75b60564c2b178875ad3991366017886))
* **cicd:** fix issue with GH_TOKEN used in authentication ([7b0525e](https://github.com/flxbl-io/sfops/commit/7b0525e104abc5d253e9c838b6f838e060807875))
* **cicd:** fix workflow file ([80c1d9d](https://github.com/flxbl-io/sfops/commit/80c1d9d2c7c8af3fe357d9afee00a2be47bfd88d))
* **deps:** updated package-lock ([d7ffd65](https://github.com/flxbl-io/sfops/commit/d7ffd654895ea77e36209fd47bba096aebb2cdf6))
* **worfklows-createanenv:** ensure create an env workflow works if some inputs are failing ([6672d01](https://github.com/flxbl-io/sfops/commit/6672d01cf22def8291b9fe2460e2dff10f4d7a77))
* **workflows:** revert disableartifactupdate in hotfix sandbox ([96ac124](https://github.com/flxbl-io/sfops/commit/96ac1242d6544714cb3c21d86cccb5e01a3bb1b0))

## [25.7.0](https://github.com/flxbl-io/sfops/compare/v25.6.1...v25.7.0) (2024-01-29)


### Features

* **actions:** write frontdoor urls to dashboard, to enable open action button ([fe38cdf](https://github.com/flxbl-io/sfops/commit/fe38cdf60b39cb17ce0a5cb235a929fb5ae58f97))


### Bug Fixes

* **workflows:** reinstante disable artifact update ([a7e67f8](https://github.com/flxbl-io/sfops/commit/a7e67f84aea068557adf535e1b42b2e8e8b7b25e))

## [25.6.1](https://github.com/flxbl-io/sfops/compare/v25.6.0...v25.6.1) (2024-01-28)


### Bug Fixes

* **actions:** fix incorrect variable expansion in renew sandbox ([f4171cc](https://github.com/flxbl-io/sfops/commit/f4171cc9b0f581301a5953c6575d3dd62aab8e48))

## [25.6.0](https://github.com/flxbl-io/sfops/compare/v25.5.0...v25.6.0) (2024-01-28)


### Features

* **review-sandbox:** move expiry to when the sandbox is first assigned ([005455d](https://github.com/flxbl-io/sfops/commit/005455d232d9b1674b64bc4d8e52b5acfc1f222b))


### Bug Fixes

* **dashboard:** display created time when assigned is not available ([b8e927b](https://github.com/flxbl-io/sfops/commit/b8e927bc64826b5a010406d57734f30a1ce75897))
* **workflow:** remove disable artifact update during pr validate on review sandbox ([19f4ae4](https://github.com/flxbl-io/sfops/commit/19f4ae4c5f888a7838076769b88af0455c1429e8))

## [25.5.0](https://github.com/flxbl-io/sfops/compare/v25.4.4...v25.5.0) (2024-01-27)


### Features

* **actions:** use the time sandbox was fetched ([d662117](https://github.com/flxbl-io/sfops/commit/d6621177deaa52b61ef34b3fc756f907986742d2))


### Bug Fixes

* **actions:** fix date time parse error ([c711cb6](https://github.com/flxbl-io/sfops/commit/c711cb6fb32611a5c8abc2dd4885ac24af2b9ced))
* **actions:** fix incorrect script invocation in release sandbox ([d4c0e6d](https://github.com/flxbl-io/sfops/commit/d4c0e6d1a586b2c01bd469cf3274085b21ccb4a9))

## [25.4.4](https://github.com/flxbl-io/sfops/compare/v25.4.3...v25.4.4) (2024-01-27)


### Bug Fixes

* **actions:** fix github repo reference in sfops renew ([07bba11](https://github.com/flxbl-io/sfops/commit/07bba11f465c892edb5f6c9b56478f10e777d169))
* **actions:** fix incorrect variable reference in expiry ([1598ba3](https://github.com/flxbl-io/sfops/commit/1598ba38d705a8ee567b51d222740ab4387c313e))

## [25.4.3](https://github.com/flxbl-io/sfops/compare/v25.4.2...v25.4.3) (2024-01-27)


### Bug Fixes

* **action:** prettify logs ([4b7b3ab](https://github.com/flxbl-io/sfops/commit/4b7b3ab1982a47a9b79d0526e54fc3ca512e56b9))
* **actions:** fix incorrect references to github repo ([d1dabb0](https://github.com/flxbl-io/sfops/commit/d1dabb00dd55a5c2eceaa872c473433a6b721715))
* **actions:** fix releasing variable with JSON ([0e43578](https://github.com/flxbl-io/sfops/commit/0e435783b1ef8ecbd1a7675c62b04eb8ba07142d))
* **actions:** remove additional stringify ([d767bd0](https://github.com/flxbl-io/sfops/commit/d767bd043c8107fbd0634bde4f5f44d93697a15c))
* **actions:** temporary fix to use gh api as opposed to gh cli set ([47e110e](https://github.com/flxbl-io/sfops/commit/47e110ea779cc0380631df467b49dba868ae4d41))
* **dashboard:** add workitem id in linked with column ([b6dcab4](https://github.com/flxbl-io/sfops/commit/b6dcab44957fa71764b76fa405645819e13204e5))

## [25.4.2](https://github.com/flxbl-io/sfops/compare/v25.4.1...v25.4.2) (2024-01-26)


### Bug Fixes

* **dashboard-release-logs:** handle when a release is never released to production ([407bbbe](https://github.com/flxbl-io/sfops/commit/407bbbe53137ed64f58b1a6b5dc4be2b7c5106e2))

## [25.4.1](https://github.com/flxbl-io/sfops/compare/v25.4.0...v25.4.1) (2024-01-25)


### Bug Fixes

* **dashboard-rc:** fix copy button used for rc links ([c10e8ae](https://github.com/flxbl-io/sfops/commit/c10e8ae49732d3e6f081afa833542f89538eca1d))

## [25.4.0](https://github.com/flxbl-io/sfops/compare/v25.3.2...v25.4.0) (2024-01-25)


### Features

* **dashboard-rc:** add link to action ([3dee373](https://github.com/flxbl-io/sfops/commit/3dee373d692310037e5e850ac7a51a58ddff53e7))
* **dashboard-rc:** add links to action that build the release defn ([c4c118e](https://github.com/flxbl-io/sfops/commit/c4c118e9d60dd4c84ee202c6edd8fcd1bdaf2d3b))


### Bug Fixes

* **dashboard-rc:** fix incorrect wrap of link anchor ([fe1fb42](https://github.com/flxbl-io/sfops/commit/fe1fb429d9210f690e450d94d7bf32c409493a5d))
* **dashboard-rc:** fix links used for linked work items ([9bf1dbd](https://github.com/flxbl-io/sfops/commit/9bf1dbd7984cbfdd824b2df89bfb1cd00bdc76ff))

## [25.3.2](https://github.com/flxbl-io/sfops/compare/v25.3.1...v25.3.2) (2024-01-25)


### Bug Fixes

* **frontdoorUrl:** do not refresh if issue is closed ([7cdc068](https://github.com/flxbl-io/sfops/commit/7cdc0686148bd48fc1379569f9a286cd291b2363))
* **workflow-release:** ensure labels are only added when a release is sucessfull ([8ca3773](https://github.com/flxbl-io/sfops/commit/8ca377316435dcab93491b933b93d5b2f6ee4e80))

## [25.3.1](https://github.com/flxbl-io/sfops/compare/v25.3.0...v25.3.1) (2024-01-25)


### Bug Fixes

* **dashboard-candidates:** fix issue where domain is not yet released ([3ee630d](https://github.com/flxbl-io/sfops/commit/3ee630d5af2f6e817fbce7b3342fe920a59dbc2e))

## [25.3.0](https://github.com/flxbl-io/sfops/compare/v25.2.0...v25.3.0) (2024-01-25)


### Features

* **dashboard-release:** add more contextual information to release details ([5170a50](https://github.com/flxbl-io/sfops/commit/5170a50042e8c17b32f6643250e2ca4d4b311438))

## [25.2.0](https://github.com/flxbl-io/sfops/compare/v25.1.5...v25.2.0) (2024-01-25)


### Features

* **dashboard:** update release candidadates to v2 ([1e29770](https://github.com/flxbl-io/sfops/commit/1e29770d9322c1d257fc9498fcf42758c7ab3845))
* **publish:** serialize publish ([088ce77](https://github.com/flxbl-io/sfops/commit/088ce775dc9674c261c849fad75fe74d9ec3ad91))


### Bug Fixes

* **dashboard-devsbx:** fix incorrect url used in dev sandbox page ([23c835a](https://github.com/flxbl-io/sfops/commit/23c835a3c6d02dac4a41c2e7a0911d3536edd7ae))
* **dashboard-scratchorgs:** fix incorrect url for repository in scratch org management page ([8dca734](https://github.com/flxbl-io/sfops/commit/8dca734b3a52876334264758943dba06df1587d1))
* **delete-env:** fix typo ([df2417b](https://github.com/flxbl-io/sfops/commit/df2417b02032ebba9abe48db37c354cc9cdd9ced))
* **publish:** add serialize to publish ([8684631](https://github.com/flxbl-io/sfops/commit/86846317f3d06c46e3b2905e130798c603a09c38))

## [25.1.5](https://github.com/flxbl-io/sfops/compare/v25.1.4...v25.1.5) (2024-01-24)


### Bug Fixes

* **sandbox-status:** ensure createdAt can be a string ([00a09f7](https://github.com/flxbl-io/sfops/commit/00a09f7903a2529b016a1300393840d60fb827f4))

## [25.1.4](https://github.com/flxbl-io/sfops/compare/v25.1.3...v25.1.4) (2024-01-23)


### Bug Fixes

* **image:** remove temporary overrides ([e5cadcb](https://github.com/flxbl-io/sfops/commit/e5cadcbc34c5be65bb736713ebab436262215d9b))

## [25.1.3](https://github.com/flxbl-io/sfops/compare/v25.1.2...v25.1.3) (2024-01-23)


### Bug Fixes

* **cherrypick:** add better error handling ([aa00804](https://github.com/flxbl-io/sfops/commit/aa00804f8127e5e6e3cd75f14be6b8d6dccee4cb))
* **issue-analyzer:** fix routing to unfreeze  ([0d97afd](https://github.com/flxbl-io/sfops/commit/0d97afd83fc33ccfd3e89acafa4e13761270751a))

## [25.1.2](https://github.com/flxbl-io/sfops/compare/v25.1.1...v25.1.2) (2024-01-23)


### Bug Fixes

* **checkSandbox:** fix sandbox not properly return for available use cases ([2c8b782](https://github.com/flxbl-io/sfops/commit/2c8b7822825816e1d932519e33cc33144bff71a3))

## [25.1.1](https://github.com/flxbl-io/sfops/compare/v25.1.0...v25.1.1) (2024-01-23)


### Bug Fixes

* **freeze-users:** fix org alias propagagtion ([bee95ac](https://github.com/flxbl-io/sfops/commit/bee95acc10458521f359259cd4728c2028a9e330))
* **pr-validate:** fix release of sandboxes while hotfix ([af4ee98](https://github.com/flxbl-io/sfops/commit/af4ee98fa1115069731229a8aca18372dc79a8ca))

## [25.1.0](https://github.com/flxbl-io/sfops/compare/v25.0.0...v25.1.0) (2024-01-22)


### Features

* add timeout for jobs ([968f2c3](https://github.com/flxbl-io/sfops/commit/968f2c3692f38ddb5cfb27c70ace584626a42053))


### Bug Fixes

* **pr-validated:** move to ff-release config ([4184511](https://github.com/flxbl-io/sfops/commit/4184511db1ef80d0afe0516ae3a071f2efcc01f3))
* **pr-validate:** fix conditions used for validate job ([f8f09fe](https://github.com/flxbl-io/sfops/commit/f8f09fecd68428af542816e49d8d5eb6d673fb0c))

## [25.0.0](https://github.com/flxbl-io/sfops/compare/v24.13.7...v25.0.0) (2024-01-21)


### ⚠ BREAKING CHANGES

* **second-gen-packages:** This is a breaking change as it changes the way the action is invoked. Users will have to update template

### Features

* **second-gen-packages:** allow multiple package installation in one issue ([77ea753](https://github.com/flxbl-io/sfops/commit/77ea7537c93e2fd5343a530f45566c394756d7a7))


### Bug Fixes

* **exec-package-installer:** update to inputs.dashboard repo ([7bbe20d](https://github.com/flxbl-io/sfops/commit/7bbe20d446988fe2a93ef5dc87e3bcd2570069de))
* **package-installer:** fix variables used from job to job ([a1dbb25](https://github.com/flxbl-io/sfops/commit/a1dbb25bca497cecec74d0bd00a19a92ec69bb98))
* **secondGenPackageInstallerAction:** Handle sfp when keys are empty ([6590b8b](https://github.com/flxbl-io/sfops/commit/6590b8bd35d3004c9ab9034886755d408b717a50))
* **secondGenPackageInstaller:** add quotes to ensure  spaces in package names ([04afa0e](https://github.com/flxbl-io/sfops/commit/04afa0e0d6a2e40ed5f67d1b6254ceda9c46e39e))
* **secondGenPackageInstaller:** ensure script breaks on failure ([2eea970](https://github.com/flxbl-io/sfops/commit/2eea97015fb9230a503cbfbd62155618beada284))
* **unlocked-package-installer-workflow:** Handle arguments with the correct variable ([c5464db](https://github.com/flxbl-io/sfops/commit/c5464db5273f26bee5f15dd1ac2c56e85d781f77))

## [24.13.7](https://github.com/flxbl-io/sfops/compare/v24.13.6...v24.13.7) (2024-01-19)


### Bug Fixes

* **fetchsandbox:** assign InUse for issues properly ([4153185](https://github.com/flxbl-io/sfops/commit/4153185b8837edb0fc9f13e7f7e04305337f6410))

## [24.13.6](https://github.com/flxbl-io/sfops/compare/v24.13.5...v24.13.6) (2024-01-19)


### Bug Fixes

* **pr-validate:** ensure comments in branch deploy model ([7f46d6b](https://github.com/flxbl-io/sfops/commit/7f46d6bdc1f99138fa9a164e77c52f77f716982e))
* **pr-validate:** fix description of activity ([180eb8e](https://github.com/flxbl-io/sfops/commit/180eb8e4a883950883f3ec8310cf241796c97460))
* **releaseSandbox:** fix variable skimming through due to gh flakines ([d1c7db1](https://github.com/flxbl-io/sfops/commit/d1c7db1f2d597f56c36ff7d813eb7bed962e5e7f))

## [24.13.5](https://github.com/flxbl-io/sfops/compare/v24.13.4...v24.13.5) (2024-01-19)


### Bug Fixes

* **sandboxstatus:** add error handling for incorrect parsing of time ([7d0c14f](https://github.com/flxbl-io/sfops/commit/7d0c14f3a7faf4917f68157f66e76da799812ee5))

## [24.13.4](https://github.com/flxbl-io/sfops/compare/v24.13.3...v24.13.4) (2024-01-19)


### Bug Fixes

* **fetch:** Retain data on variable ([cef9f3b](https://github.com/flxbl-io/sfops/commit/cef9f3bfeca07e41cffbc47acf5bdbe5922a44ea))

## [24.13.3](https://github.com/flxbl-io/sfops/compare/v24.13.2...v24.13.3) (2024-01-19)


### Bug Fixes

* **deletion:** fix missing env variables deletion of component ([27f9192](https://github.com/flxbl-io/sfops/commit/27f91924ac74081de706c6fb98b56f7972983fe8))
* **devsandbox:** add created at status ([19ba5df](https://github.com/flxbl-io/sfops/commit/19ba5df4751a1f590ace67f6d6263d8744ef04eb))

## [24.13.2](https://github.com/flxbl-io/sfops/compare/v24.13.1...v24.13.2) (2024-01-19)


### Bug Fixes

* **dev-sandboxes:** add createdAt to developer sandbox ([3982bca](https://github.com/flxbl-io/sfops/commit/3982bcade10b8e04519bf44f2c07cba45b49e85b))

## [24.13.1](https://github.com/flxbl-io/sfops/compare/v24.13.0...v24.13.1) (2024-01-19)


### Bug Fixes

* **sandbox-status:** display sandbox status received from salesforce in logs ([4209a52](https://github.com/flxbl-io/sfops/commit/4209a525cf60aef85060d6e88c300281445423b1))
* **sandbox-status:** handle exitsing conditions for immortal and Provisioning in progress ([6d37edb](https://github.com/flxbl-io/sfops/commit/6d37edb9cbfb68df603217c89bb716b547b2666c))
* **sandbox-status:** remove unhelpful error message ([b80a887](https://github.com/flxbl-io/sfops/commit/b80a8879c40c3d599f9d9ff2784a8bfdcf269b79))

## [24.13.0](https://github.com/flxbl-io/sfops/compare/v24.12.2...v24.13.0) (2024-01-19)


### Features

* **dashboard:** add a display of created Date in dasbhoard ([d74627c](https://github.com/flxbl-io/sfops/commit/d74627cf0f5d79f7600c7c882ae2ba04686081db))


### Bug Fixes

* **review-sandbox:** remove unassign button ([0b40122](https://github.com/flxbl-io/sfops/commit/0b401223b9a317af9d1b63eb289dd23ae56876e7))
* **status:** display N/A when createdAt is not available ([80ba0f5](https://github.com/flxbl-io/sfops/commit/80ba0f546a5616c970d1a49cda17bc54b40c5a46))
* **status:** handle lack of created time more accurately ([b690522](https://github.com/flxbl-io/sfops/commit/b690522011e99a6612b24a30021fcd0419a89bd1))
* **status:** rename cratedAt to Completed At ([fb30747](https://github.com/flxbl-io/sfops/commit/fb30747fad56f29bc3576094eedc9089191d4727))
* **status:** report columns correctly for review sandbox ([a790d02](https://github.com/flxbl-io/sfops/commit/a790d0205a9774d1083a85ba9fbedb7adcf214b4))

## [24.12.2](https://github.com/flxbl-io/sfops/compare/v24.12.1...v24.12.2) (2024-01-19)


### Bug Fixes

* **sandbox-status:** use iso string ([8b026c0](https://github.com/flxbl-io/sfops/commit/8b026c00b6e0f6ab7bb4c76f9d758e0b28a93ee1))

## [24.12.1](https://github.com/flxbl-io/sfops/compare/v24.12.0...v24.12.1) (2024-01-19)


### Bug Fixes

* **sandboxstatus:** use created at from the value ([cf78897](https://github.com/flxbl-io/sfops/commit/cf7889719588576ddac1a49af1ca0c141837e4e5))
* **status:** print error of sandbox checks ([c45e6d7](https://github.com/flxbl-io/sfops/commit/c45e6d76ae9a4e1ca84b65fd71c19478466f0185))

## [24.12.0](https://github.com/flxbl-io/sfops/compare/v24.11.1...v24.12.0) (2024-01-18)


### Features

* **expiry-revieworgs:** ensure sandbox createdTime is taken to account as opposed to variable time ([d0df224](https://github.com/flxbl-io/sfops/commit/d0df224d20091b2f9a85de27d041747de57c38dd))
* **validate:** add additional links to validation run ([0846720](https://github.com/flxbl-io/sfops/commit/084672026000f2b4b78804729aacd35200c50056))


### Bug Fixes

* **allocate-sandbox:** fix error handling ([a06125a](https://github.com/flxbl-io/sfops/commit/a06125a4a786718de98826d0bbdb5c45f43f5e2f))

## [24.11.1](https://github.com/flxbl-io/sfops/compare/v24.11.0...v24.11.1) (2024-01-17)


### Bug Fixes

* **ci:** add a manual workflow dispatch ([3cd1aab](https://github.com/flxbl-io/sfops/commit/3cd1aab5314c3e1a94c067d98fa80cbad8a23e27))

## [24.11.0](https://github.com/flxbl-io/sfops/compare/v24.10.1...v24.11.0) (2024-01-16)


### Features

* **expirerevieworgs:** ensure sandboxes have real usable time of 24 and 48 Hours ([ae2b3aa](https://github.com/flxbl-io/sfops/commit/ae2b3aa3c920c094907fb0aaf67130318c7019d7))


### Bug Fixes

* **deleteSandbox:** fix typo of additional space in logs ([5ebc0b8](https://github.com/flxbl-io/sfops/commit/5ebc0b8ce91950e5b9569ae2151cb3c9ea27c833))

## [24.10.1](https://github.com/flxbl-io/sfops/compare/v24.10.0...v24.10.1) (2024-01-16)


### Bug Fixes

* **frontdoorurl:** fix jobs hanging while trying to update review orgs ([b6006bd](https://github.com/flxbl-io/sfops/commit/b6006bd4759a0dceac2e13db89332e62e749df63))
* **workflow-release:** ensure owner is added so that it can commit into dashboard repo ([7db9bac](https://github.com/flxbl-io/sfops/commit/7db9bacf734fd714af3245d59ac2d39ad7337322))

## [24.10.0](https://github.com/flxbl-io/sfops/compare/v24.9.2...v24.10.0) (2024-01-15)


### Features

* **envinfo:** ensure release modal is available ([60b905b](https://github.com/flxbl-io/sfops/commit/60b905babd5ace1d50aaa6e704867479e7e2eff2))
* **envinfos:** report deployments/releases of each environment ([8988127](https://github.com/flxbl-io/sfops/commit/8988127416f0bb5f1cd52d819e64ff1835d6f90f))


### Bug Fixes

* **dashboard:** fix defect where yaml diff is not displayed ([ceee346](https://github.com/flxbl-io/sfops/commit/ceee34698c44f424f89dd4bab30448f30f928a3b))
* **envInfos:** fix sha becoming empty when there is no deployments ([3278af9](https://github.com/flxbl-io/sfops/commit/3278af9ccf2fc4859b6bcef99417fa648cd472c2))

## [24.9.2](https://github.com/flxbl-io/sfops/compare/v24.9.1...v24.9.2) (2024-01-12)


### Bug Fixes

* **validate:** update to 30.2.9 of sfp ([dc81cb2](https://github.com/flxbl-io/sfops/commit/dc81cb25770734d2ca9b7adb0ecc98c5a0c09e85))

## [24.9.1](https://github.com/flxbl-io/sfops/compare/v24.9.0...v24.9.1) (2024-01-12)


### Bug Fixes

* **validate:** update to sfp 30.2.8 for dependencyOn bug ([72510cb](https://github.com/flxbl-io/sfops/commit/72510cbabd1cab2e11f47af23e38ecdee60db7cd))

## [24.9.0](https://github.com/flxbl-io/sfops/compare/v24.8.0...v24.9.0) (2024-01-12)


### Features

* **metrics-workflows:** add workflow execution time metrics to build and release ([9471e2f](https://github.com/flxbl-io/sfops/commit/9471e2f0a9e55f21f2516aa148e578a09a55c57b))


### Bug Fixes

* **metrics:** use lite image ([4cfc49a](https://github.com/flxbl-io/sfops/commit/4cfc49ad690b38fedbe805c7da84c21f7f026d6c))
* **workflow-release:** ensure safe directory is added for gh cli ([c84aa96](https://github.com/flxbl-io/sfops/commit/c84aa960ce84f6a76176e2d4257258aa72d935cc))

## [24.8.0](https://github.com/flxbl-io/sfops/compare/v24.7.2...v24.8.0) (2024-01-12)


### Features

* **metrics:** report full workflow execution time ([cec1909](https://github.com/flxbl-io/sfops/commit/cec1909e6d0962a36ffa37e419783b28b0604fc1))


### Bug Fixes

* **metrics-workflow:** add missing flag for type ([827a8bc](https://github.com/flxbl-io/sfops/commit/827a8bc12def4a00b2c94801815c33b62d7008d0))
* **metrics-workflow:** fix incorrect variable completion ([149c763](https://github.com/flxbl-io/sfops/commit/149c763ffe33c86e4f0c9c593fbc724bb15a6ada))

## [24.7.2](https://github.com/flxbl-io/sfops/compare/v24.7.1...v24.7.2) (2024-01-11)


### Bug Fixes

* **validate:** do fail fast only on validate ([d664481](https://github.com/flxbl-io/sfops/commit/d664481978303f4a9ab301cb138c82108309ef1c))
* **workflows:** ensure pr-validate and push-to-branch fails immediately ([d0a145a](https://github.com/flxbl-io/sfops/commit/d0a145a34dad9b28b9ee509918422502c761f547))

## [24.7.1](https://github.com/flxbl-io/sfops/compare/v24.7.0...v24.7.1) (2024-01-11)


### Bug Fixes

* **expire:** fix incorrect variable for immortal sandbox ([62e7a61](https://github.com/flxbl-io/sfops/commit/62e7a618f6daeb448b322578ab9ce72e6c3bf295))

## [24.7.0](https://github.com/flxbl-io/sfops/compare/v24.6.1...v24.7.0) (2024-01-11)


### Features

* **validate:** add domain labels when validation is being run ([1e40818](https://github.com/flxbl-io/sfops/commit/1e40818d6404f34d359feb894b903461a3bc96cc))
* **workflow-pr:** add concurrency control to pull request jobs ([c0bdd4a](https://github.com/flxbl-io/sfops/commit/c0bdd4ab9bf02eb205d551c9996a6d69a8a3c12d))
* **workflow-validate:** add labels to describe various status of PR ([e7b9783](https://github.com/flxbl-io/sfops/commit/e7b97838d403d56f75257d2be9b20d3ebf1085e9))


### Bug Fixes

* **workflow-validate:** removal of labels should not fail if labels are missing ([5c19a59](https://github.com/flxbl-io/sfops/commit/5c19a59744b38040e8f414355b680be36eec39bd))
* **workflow-validate:** remove incorrect syntax ([8656d04](https://github.com/flxbl-io/sfops/commit/8656d04de1cff9e63222b7ac92af3febfe3aefa0))
* **workflows-validate:** fix conditions on labels due to weird gh bug ([9a86a18](https://github.com/flxbl-io/sfops/commit/9a86a18763a585b753ade16caa09f01c91f52b27))

## [24.6.1](https://github.com/flxbl-io/sfops/compare/v24.6.0...v24.6.1) (2024-01-10)


### Bug Fixes

* **fetch:** respect isExtended and isImmortal ([4922866](https://github.com/flxbl-io/sfops/commit/4922866e60982638f837065550413116f8cb8683))

## [24.6.0](https://github.com/flxbl-io/sfops/compare/v24.5.6...v24.6.0) (2024-01-10)


### Features

* **dashboard:** ensure review sandbox display extension and immortal status ([95a33de](https://github.com/flxbl-io/sfops/commit/95a33ded90cfec9580f4fd56fc66917fd83b5650))
* **reviewsandbox:** ability to retain a review sandbox forever ([9002186](https://github.com/flxbl-io/sfops/commit/9002186169f11b3702b00afb84279e16eae8c08c))


### Bug Fixes

* **sandboxstatus:** ensure  paginate of variables properly ([f9355da](https://github.com/flxbl-io/sfops/commit/f9355da25a7b6dc189db6e8d3b8ca1138b021016))

## [24.5.6](https://github.com/flxbl-io/sfops/compare/v24.5.5...v24.5.6) (2024-01-09)


### Bug Fixes

* **pr-validate:** update to 30.2.7 for upstream fixes ([60129ec](https://github.com/flxbl-io/sfops/commit/60129ec5f2f160595dacd29de70c44cf5f5318c4))

## [24.5.5](https://github.com/flxbl-io/sfops/compare/v24.5.4...v24.5.5) (2024-01-09)


### Bug Fixes

* **ghmetrics:** increase the limit to 100 to ensure metrics are captured ([d2216d5](https://github.com/flxbl-io/sfops/commit/d2216d5cb9cd8930faf8f6c0d6f8603184052e97))

## [24.5.4](https://github.com/flxbl-io/sfops/compare/v24.5.3...v24.5.4) (2024-01-09)


### Bug Fixes

* **pool-create:** update to 30.2.6 ([a1ef943](https://github.com/flxbl-io/sfops/commit/a1ef943f26e14803637bf3f4c8056fdd7857c2e6))

## [24.5.3](https://github.com/flxbl-io/sfops/compare/v24.5.2...v24.5.3) (2024-01-09)


### Bug Fixes

* **impact:** update sfp to 30.2.6 ([7b6b7d5](https://github.com/flxbl-io/sfops/commit/7b6b7d51b6c81b624fd6e2597523627d15cde5e9))

## [24.5.2](https://github.com/flxbl-io/sfops/compare/v24.5.1...v24.5.2) (2024-01-09)


### Bug Fixes

* **impact:** rollback to 30.2.4 ([c0651a2](https://github.com/flxbl-io/sfops/commit/c0651a2909701d43ea0857488a39e5bcd6c69fa3))

## [24.5.1](https://github.com/flxbl-io/sfops/compare/v24.5.0...v24.5.1) (2024-01-09)


### Bug Fixes

* **pr-validate:** update sfp to 30.2.5 ([cc55a75](https://github.com/flxbl-io/sfops/commit/cc55a753bd8297cadf503903adca438aeceb42a9))

## [24.5.0](https://github.com/flxbl-io/sfops/compare/v24.4.2...v24.5.0) (2024-01-09)


### Features

* **actions:** optimize impacted release config check ([fa577fe](https://github.com/flxbl-io/sfops/commit/fa577feb8091a879d35d3530aa772f08fb183e7c))


### Bug Fixes

* **pr-validate:** ensure sha is used instead of ref in github context ([3efba54](https://github.com/flxbl-io/sfops/commit/3efba54592ee097851294d1380b2c9579889bf95))
* **pr-validate:** remove the incorrect path mentioned in comment ([aac66d6](https://github.com/flxbl-io/sfops/commit/aac66d6833e98b84b20dd07f7b0a8e7122bf105c))
* **pr-validate:** use the correct parameters and switch to the correct action ([68083e5](https://github.com/flxbl-io/sfops/commit/68083e55b8be7a060326697498cac2cf57afad7f))
* **releaseconfig-impact:** update to bugfixed upstream of sfp ([352b5e9](https://github.com/flxbl-io/sfops/commit/352b5e93d337509961ddcade2a2a0cf9af7ab55a))
* **renew:** ensure renew is operated even when sandbox is not assigned ([b425713](https://github.com/flxbl-io/sfops/commit/b4257134fc8c7c8d59fced5aad4e8b1358ce2b1b))

## [24.4.2](https://github.com/flxbl-io/sfops/compare/v24.4.1...v24.4.2) (2024-01-09)


### Bug Fixes

* **workflows:** add force for sfp override ([ac16634](https://github.com/flxbl-io/sfops/commit/ac166343eb675c78641d0a81fe870e5e1ff501c6))

## [24.4.1](https://github.com/flxbl-io/sfops/compare/v24.4.0...v24.4.1) (2024-01-08)


### Bug Fixes

* **cicd:** rename the job to be explict ([d16fd7a](https://github.com/flxbl-io/sfops/commit/d16fd7a0d97ecd173e743c76b9f940151e009398))
* **workflows:** temporarily override sfp to flxbl version ([8a8c336](https://github.com/flxbl-io/sfops/commit/8a8c3366a4053807996fa66e49a35e96237c5ddd))

## [24.4.0](https://github.com/flxbl-io/sfops/compare/v24.3.1...v24.4.0) (2024-01-08)


### Features

* **docker:** ability to select customer images or older images while syncing workflows ([b9c334c](https://github.com/flxbl-io/sfops/commit/b9c334cb0d0838734c0cfd1a01e67ce3b46d1dc0))


### Bug Fixes

* **cicd:** add env variables for replacing image ([a1eac26](https://github.com/flxbl-io/sfops/commit/a1eac26ce26999ae13f1496a5484777363466fa5))
* **cicd:** ensure different place holders are used ([28eca00](https://github.com/flxbl-io/sfops/commit/28eca006653f870fbcc11414a898a8fceefa0e93))

## [24.3.1](https://github.com/flxbl-io/sfops/compare/v24.3.0...v24.3.1) (2024-01-08)


### Bug Fixes

* **actions:** fix incorrect json parsing ([c355097](https://github.com/flxbl-io/sfops/commit/c35509726e6a1987a0d990f3d94511f6fe68a305))
* **actions:** fix incorrect use of paginate in expiring sandboxes ([f1f7d92](https://github.com/flxbl-io/sfops/commit/f1f7d922e93eb68523d92cec0783bf8ed0e96086))
* **actions:** remove duplication of gh merge-json ([b2f4621](https://github.com/flxbl-io/sfops/commit/b2f462136c8b2e068e3222245e6822e023ef71cc))
* **actions:** remove incorrect spacing on log ([7af61d1](https://github.com/flxbl-io/sfops/commit/7af61d165fe280d4b00421d827e2ff4f67d889aa))
* **workflows:** add pagination to list sandbox creation issues ([cea2cf5](https://github.com/flxbl-io/sfops/commit/cea2cf58efddc01511a319cdbc67fd77b29b8f61))

## [24.3.0](https://github.com/flxbl-io/sfops/compare/v24.2.2...v24.3.0) (2024-01-06)


### Features

* **actions:** remove the need for manual reopen/close for PR during renew ([5ed50a8](https://github.com/flxbl-io/sfops/commit/5ed50a8f0bc8a37fd198cc0ba2ff0b9a1862ac6b))
* **cicd:** add version number to sync info ([630145a](https://github.com/flxbl-io/sfops/commit/630145aa570c5ee6c646dcd517e77da0b7570681))
* **workflows:** display a comment when no config(domain) is identified when a PR is analyzed ([22a720a](https://github.com/flxbl-io/sfops/commit/22a720a39a954b06eedd0bd9900390de9e213b15))
* **workflows:** print name of release config used in comments ([d36d516](https://github.com/flxbl-io/sfops/commit/d36d516c78240720541184fa3e905e69d350303e))


### Bug Fixes

* **actions:** ensure exec actions within allocate jobs are timed out within 5 mins ([b7136f0](https://github.com/flxbl-io/sfops/commit/b7136f0cfb545ec6b00de23caef8fc0d4a4359d0))

## [24.2.2](https://github.com/flxbl-io/sfops/compare/v24.2.1...v24.2.2) (2024-01-05)


### Bug Fixes

* **actions:** fix tag for review sandboxes ([f8b4b1a](https://github.com/flxbl-io/sfops/commit/f8b4b1a56f1c17e65197bb565cb533a55870012b))
* **workflows:** do not trigger any branch deploy related tasks in Draft mode ([984d1ba](https://github.com/flxbl-io/sfops/commit/984d1ba2d5a859b7ed338ef26399c2ba8a213354))
* **workflows:** ignore PR validation if the PR is marked draft ([203ff9f](https://github.com/flxbl-io/sfops/commit/203ff9f7ffeba1d2352f4f93c7ecd3c9be3fbceb))
* **workflows:** status should not be green in draft PRs ([8e955bf](https://github.com/flxbl-io/sfops/commit/8e955bffd53a7f95984046655c59f3aaf75dfe25))

## [24.2.1](https://github.com/flxbl-io/sfops/compare/v24.2.0...v24.2.1) (2024-01-04)


### Bug Fixes

* **actions:** revert explictDependencyCheck ([72ff317](https://github.com/flxbl-io/sfops/commit/72ff3171f2418317fd25b0ad83c76c440cfedc71))

## [24.2.0](https://github.com/flxbl-io/sfops/compare/v24.1.9...v24.2.0) (2024-01-04)


### Features

* **actions:** impact checker to check for impacts on dependencyOn packages ([6590861](https://github.com/flxbl-io/sfops/commit/659086118be4acc158125e8fb62eed52710f46de))

## [24.1.9](https://github.com/flxbl-io/sfops/compare/v24.1.8...v24.1.9) (2024-01-04)


### Bug Fixes

* **workflows:** validate against scratch org not getting triggered ([ebd2ec1](https://github.com/flxbl-io/sfops/commit/ebd2ec1803125ed4ef426ea71c76e0cd703794e9))

## [24.1.8](https://github.com/flxbl-io/sfops/compare/v24.1.7...v24.1.8) (2024-01-03)


### Bug Fixes

* **actions:** fix incorrect substitution in email ([7cf2761](https://github.com/flxbl-io/sfops/commit/7cf27612d127ecc8c3f09d520ddf43f93135d41f))

## [24.1.7](https://github.com/flxbl-io/sfops/compare/v24.1.6...v24.1.7) (2024-01-03)


### Bug Fixes

* **actions:** fix incorrect substitution of '.' in dev email ([fa99680](https://github.com/flxbl-io/sfops/commit/fa996804a4f7a6ec6e0a883e8a508a13d536be93))

## [24.1.6](https://github.com/flxbl-io/sfops/compare/v24.1.5...v24.1.6) (2024-01-03)


### Bug Fixes

* **actions:** fix issue when the email id has short names ([7125dc3](https://github.com/flxbl-io/sfops/commit/7125dc356169b7cd6f51ad428d75a283704ea7f6))

## [24.1.5](https://github.com/flxbl-io/sfops/compare/v24.1.4...v24.1.5) (2024-01-03)


### Bug Fixes

* **cicd:** fix change name to id ([737b2ed](https://github.com/flxbl-io/sfops/commit/737b2edbbc1e7f11b7fde3d151520e45b7ce7851))

## [24.1.4](https://github.com/flxbl-io/sfops/compare/v24.1.3...v24.1.4) (2024-01-03)


### Bug Fixes

* **cicd:** add a workflow dispatch for debug ([9ea0bb9](https://github.com/flxbl-io/sfops/commit/9ea0bb96b8de2ac724e8266b7a5562d8b6a31c10))

## [24.1.3](https://github.com/flxbl-io/sfops/compare/v24.1.2...v24.1.3) (2024-01-03)


### Bug Fixes

* **cicd:** change variable to releases_created ([64f0c20](https://github.com/flxbl-io/sfops/commit/64f0c207938fa1b14ea72b97a237d66f3d078fad))

## [24.1.2](https://github.com/flxbl-io/sfops/compare/v24.1.1...v24.1.2) (2024-01-03)


### Bug Fixes

* **cicd:** remove sync from build ([349ee8a](https://github.com/flxbl-io/sfops/commit/349ee8affb7dd723cbafe968fbbf1eea18764532))

## [24.1.1](https://github.com/flxbl-io/sfops/compare/v24.1.0...v24.1.1) (2024-01-03)


### Bug Fixes

* **cicd:** sync to customers only after release please action is run ([62105e8](https://github.com/flxbl-io/sfops/commit/62105e84e4d2cbb499e9e36c734ccb06640d7323))

## [24.1.0](https://github.com/flxbl-io/sfops/compare/v24.0.0...v24.1.0) (2024-01-03)


### Features

* **cicd:** ensure sync only when release please is triggered ([3c724d7](https://github.com/flxbl-io/sfops/commit/3c724d77cb757f546c0e72feb7a0f428c3c38930))
* **scripts:** ensure changelog and version is copied ([9f7b073](https://github.com/flxbl-io/sfops/commit/9f7b0736cbb272d939b0757e523813fc4492c2b0))

## 1.0.0 (2024-01-03)


### Features

* add a base branch ([bb4708c](https://github.com/flxbl-io/sfops/commit/bb4708c4a0a4741a6e3135dc9d7d9dfeea8646ac))
* add a branch name ([dded361](https://github.com/flxbl-io/sfops/commit/dded3614e40e4001ee0b712bc30dcd63215851b7))
* add a fork of jira-lint ([1a19a25](https://github.com/flxbl-io/sfops/commit/1a19a255290a125da616da706bb595c31801a06a))
* add a forked version of lock ([4080fdd](https://github.com/flxbl-io/sfops/commit/4080fdd98d3d0dc9979d3be770ce4a999724403c))
* add a locked json ([a6d3e89](https://github.com/flxbl-io/sfops/commit/a6d3e89bb153a0197145135b8ab6db2ae030e90d))
* add a new action to find release defn ([9dff892](https://github.com/flxbl-io/sfops/commit/9dff8923195e86a7e0bc5fd9fb2aabddb0eb4ed8))
* add a reusable workflow for branch base deployment ([3358b58](https://github.com/flxbl-io/sfops/commit/3358b588f990c5bde120dd583727dad6fc8bdb20))
* add a web image url unfurl asset ([1bad22a](https://github.com/flxbl-io/sfops/commit/1bad22ace45ae4399543b04d6003571981c418b5))
* add ability to forcetest ([2e910ea](https://github.com/flxbl-io/sfops/commit/2e910eaa8c180a9de3f37ff40bd4ca7a1275fd0e))
* add additional flag ([bd1812e](https://github.com/flxbl-io/sfops/commit/bd1812e8d2981448a12d20387821c79c223092b6))
* add an action to remove assignments ([00ebff5](https://github.com/flxbl-io/sfops/commit/00ebff52af000b06c8d7f512ca6db8aba2ae0232))
* add an action to set checkruns status ([0c721f5](https://github.com/flxbl-io/sfops/commit/0c721f50beb2503143778fe7bceb23d58b5c6a86))
* add an actionlint ([de56435](https://github.com/flxbl-io/sfops/commit/de5643578e81713c2d360ea2ccca18efee0a306f))
* add an indicator for new tab drop ([7110c1f](https://github.com/flxbl-io/sfops/commit/7110c1f3f308bad391263d20a22cf162c189f09e))
* add an initial version ([7b99172](https://github.com/flxbl-io/sfops/commit/7b991728800ae105e26414c6922ffed911a40b19))
* add an optional toggle for source pkg override ([70e976d](https://github.com/flxbl-io/sfops/commit/70e976d6ededd0b6c2de9404f6b06352f78e8be6))
* add branch to sandbox pool ([057aad2](https://github.com/flxbl-io/sfops/commit/057aad2a82983bc6085407c3e9cdc8477ff983e0))
* add cleanup workflow runs ([f6bbb30](https://github.com/flxbl-io/sfops/commit/f6bbb30c6a066edb38ba1fd232207148225e5291))
* add color codes to sandbox availability ([2b1869a](https://github.com/flxbl-io/sfops/commit/2b1869a2682ceab97fd010c03db4508b3fb98fac))
* add dependabot scanning ([7f3780a](https://github.com/flxbl-io/sfops/commit/7f3780a14af490fd8050c0fe2084b03b0db976bd))
* add deployment status update to build -test workflows ([6fe4a6a](https://github.com/flxbl-io/sfops/commit/6fe4a6a4f983caa11eaa62160e3fd1695bb9055f))
* add featur to renew org ([cf56949](https://github.com/flxbl-io/sfops/commit/cf56949149f49830c81a562d65d05ab1deada8fd))
* add future availability of sandboxes ([bd92639](https://github.com/flxbl-io/sfops/commit/bd92639a2e85d5094a0c85fb0e179bfa8029f1bb))
* add husky as pre commit ([90d998d](https://github.com/flxbl-io/sfops/commit/90d998d79d8be5ce8a439d982f39720f72626a4e))
* add info cards on availability ([7e1101a](https://github.com/flxbl-io/sfops/commit/7e1101a7f021010682dde8e2ddf3bc58fdf2b220))
* add instruction on renew comment ([0d054d4](https://github.com/flxbl-io/sfops/commit/0d054d4fe4c5b00e168afd9909d6ebc91ee7da4e))
* add issue number to lock ([dea6a91](https://github.com/flxbl-io/sfops/commit/dea6a91d3c0f1c83bf1888ffb70ad1e3b226eb44))
* add missing vars ([df034a3](https://github.com/flxbl-io/sfops/commit/df034a3eb93c779a61af6d3776ef8bf0b85c0b93))
* add new gh metric reporter ([bc8ba28](https://github.com/flxbl-io/sfops/commit/bc8ba2843fbe59bc81f257183e7ba0f1a02a465e))
* add on push jobs ([508a3fc](https://github.com/flxbl-io/sfops/commit/508a3fcd8d7ebd7756d67af9ca7e6121d08431d3))
* add option to delete ([2c6a1a2](https://github.com/flxbl-io/sfops/commit/2c6a1a20a3ed7036cfbe26c98cbe91b9bf70db26))
* add package visualisation to dashboards ([5d39704](https://github.com/flxbl-io/sfops/commit/5d3970489f4a244c0a37dce04cce308942dfc970))
* add pr validation status ([b063157](https://github.com/flxbl-io/sfops/commit/b063157464148f71ce172d8cfbf1c19433f89557))
* add reviewSandbox ([2688efb](https://github.com/flxbl-io/sfops/commit/2688efb9be69e89480e739c7503ade1cc8f85086))
* add safe directories ([a2b4dc3](https://github.com/flxbl-io/sfops/commit/a2b4dc35f09af39c34767c5ca4947763b24164eb))
* add sandbox status report ([c46754c](https://github.com/flxbl-io/sfops/commit/c46754c92bf6fb9bde56c0e0e0030f72e5731089))
* add scratch org reporting ([0320ccb](https://github.com/flxbl-io/sfops/commit/0320ccbd95b570ea2f5c7a7487c93ac93a358d14))
* add scratch org status and markdown ([eb0de44](https://github.com/flxbl-io/sfops/commit/eb0de445b9c146f3f46c60ff76a58541314e161f))
* add snapshot environments ([c3f160e](https://github.com/flxbl-io/sfops/commit/c3f160e9feb0a516b892d7eb7677851ad0e8a75b))
* add support for source tracking reset ([0cb2bd2](https://github.com/flxbl-io/sfops/commit/0cb2bd2f04257e38a868c0ab99075f4a33653102))
* add support for test run only orgs ([6c6ab47](https://github.com/flxbl-io/sfops/commit/6c6ab477e084dcab551cc13ac0c8fcf5aad2c72e))
* **all:** add a new feature to refresh front door url for assigned sandboxes ([9e6e601](https://github.com/flxbl-io/sfops/commit/9e6e6010b55ed7d45da93f9944b2fc0fdc2ad392))
* **all:** improve hotfix workflow ([ce1d207](https://github.com/flxbl-io/sfops/commit/ce1d207bda5f88b080a0e1bea4fb2ddd96c08bb0))
* branch deployment reporter ([3cbfe0a](https://github.com/flxbl-io/sfops/commit/3cbfe0a139f9bcaa88fa2c4fb70f29954f7e0ab3))
* change husky to prelint ([e1606ba](https://github.com/flxbl-io/sfops/commit/e1606ba26207c50c5232442209a4f7709b5d19c9))
* **ci:** add release-please workflow ([d02574b](https://github.com/flxbl-io/sfops/commit/d02574b15977881aee40a5757089949091d88381))
* cleanup dashboards to make it easy to navigate ([7394a16](https://github.com/flxbl-io/sfops/commit/7394a166fc57a97ccb3dc1478a23c037b85712fa))
* convert jira linter to reusable ([b737b18](https://github.com/flxbl-io/sfops/commit/b737b18a9e4a7a8069370dbdfb08da6476fef8e7))
* **dashboard:** add expiry date to developer sandboxes ([04125d2](https://github.com/flxbl-io/sfops/commit/04125d271bf8eb20a89c55e1c7f7bceb15b3f430))
* **dashboard:** process hotfix branches ([d12163a](https://github.com/flxbl-io/sfops/commit/d12163aae758c768660c80f4c5a7263481b922fc))
* **dashboards:** add infocard to developer sandboxes ([d1c0427](https://github.com/flxbl-io/sfops/commit/d1c0427eddeea4069b5ff422bae6aae0a7e446bc))
* display domain if available ([c192ac2](https://github.com/flxbl-io/sfops/commit/c192ac231e7aec132163f6100d523df98669cc74))
* display sandbox status ([13e10df](https://github.com/flxbl-io/sfops/commit/13e10dfdbb8f0c3181d26cd45be716f48e92f879))
* drop in update to project workflows to support github pat ([62af413](https://github.com/flxbl-io/sfops/commit/62af413d1c002e0fc5cedf99cc92f29032325911))
* fix any app related token issues ([f6e0a14](https://github.com/flxbl-io/sfops/commit/f6e0a1401e2af4ac0bc0570a7c1f94d3d9457b67))
* fix deployment Status ([ec9c456](https://github.com/flxbl-io/sfops/commit/ec9c45623e3e3b9e520e1f28df6ed34f51b5e767))
* introduce async dev sandbox provisioning ([239e74e](https://github.com/flxbl-io/sfops/commit/239e74e543bdd162de6da5a3d63d2c8e41f4e008))
* make createDev Sandbxes async ([a4c6697](https://github.com/flxbl-io/sfops/commit/a4c6697974327d4384acd192302111678a606507))
* modify reusable workflows for Github PAT ([f08a24c](https://github.com/flxbl-io/sfops/commit/f08a24c18a3d32baffe14227422c48b778db9131))
* modify reusable workflows for Github PAT ([f08a24c](https://github.com/flxbl-io/sfops/commit/f08a24c18a3d32baffe14227422c48b778db9131))
* modify reusable workflows for GIthub PAT ([9f1d630](https://github.com/flxbl-io/sfops/commit/9f1d6308467a1785f06f62dee4c956547bba073a))
* move to action based comments ([b3c8c29](https://github.com/flxbl-io/sfops/commit/b3c8c29be690ad995415aeb4bdd08ce80cffc48e))
* move to issue assignment ([b6ecb66](https://github.com/flxbl-io/sfops/commit/b6ecb666625904eec5fbed94d188041beb753ffe))
* only deactivate if requested explictly ([dd2e15f](https://github.com/flxbl-io/sfops/commit/dd2e15f3dce5607db9dddd208554a5f2c70fff90))
* refresh comment ([ff2aa8b](https://github.com/flxbl-io/sfops/commit/ff2aa8ba5318f7eb212ece2693f8a32cbfeb5047))
* **reusable-workflows:** add names to execute jobs ([a161a36](https://github.com/flxbl-io/sfops/commit/a161a3698387e0b9dd8378af9d995c673558474b))
* revamp to use environments ([0194e9e](https://github.com/flxbl-io/sfops/commit/0194e9e162391e36956b47e5bec2771da5a06503))
* **scratchorgs:** update dropdown with pool selector ([49b0ace](https://github.com/flxbl-io/sfops/commit/49b0aceb0453e644ea9f4e5d7f9c584879470477))
* style workitems and update fonts ([e04b22b](https://github.com/flxbl-io/sfops/commit/e04b22bfecafd0ce3aa17894f63afe9b451b1bc5))
* update check status and faster unlock ([62c03c7](https://github.com/flxbl-io/sfops/commit/62c03c71c9e342cfa256f70b323c18486f8dc1dd))
* update LICENSE to BSL ([c94fe9d](https://github.com/flxbl-io/sfops/commit/c94fe9d5598d4e6a90286a29c7f7f4adb3b3208b))
* update logo and add app header ([1e9acca](https://github.com/flxbl-io/sfops/commit/1e9acca73f19681681d4a82cc8f7b6b9b3ddb887))
* update package locks ([e72dc20](https://github.com/flxbl-io/sfops/commit/e72dc20ad42f86d0297ed323109f6695fda6098b))
* Update project workflows ([e93a788](https://github.com/flxbl-io/sfops/commit/e93a7885eed1f914f12cc90de4ad7f327b9ea0b4))
* update to recent enhancements ([614956e](https://github.com/flxbl-io/sfops/commit/614956e56db7d759b81c6e4f17d0b683d167dd7f))
* **workflows:** add support for package installation keys in scratch org pools ([ef5d9b9](https://github.com/flxbl-io/sfops/commit/ef5d9b9ca6da3e6fa060dd681584183aa3b9173c))


### Bug Fixes

* acd action lint installation ([3820ee7](https://github.com/flxbl-io/sfops/commit/3820ee7afc7cf9b9cb5df8ad954715de45b2f881))
* **actions:** add a console log ([bac33ab](https://github.com/flxbl-io/sfops/commit/bac33ab32a554c282ed895df03a5869bcf640922))
* **actions:** add a debug output ([74069bb](https://github.com/flxbl-io/sfops/commit/74069bbb44832f964cc9ca13df32f5dbf4c9057a))
* **actions:** add an initial comment ([e8220f5](https://github.com/flxbl-io/sfops/commit/e8220f5780adfbae9aed69500bea125f46c7b827))
* **actions:** add error handling to variable parsing ([227316e](https://github.com/flxbl-io/sfops/commit/227316e10063446c478c5c0467a7b3e3ba7c57e2))
* **actions:** add missing gh_token and error handling when variables are null ([7a673e1](https://github.com/flxbl-io/sfops/commit/7a673e194fa754b088c86d85b94d341603df4956))
* **actions:** add missing notice on createDevSandbox ([268c574](https://github.com/flxbl-io/sfops/commit/268c5748c7e8a904e562e804e6ac145c9ab1c960))
* **actions:** add more debug statements ([cd8b5f5](https://github.com/flxbl-io/sfops/commit/cd8b5f514286f595bb7cb43fb7d28d6b06b9502b))
* **actions:** add pagination to expiry ([fd98495](https://github.com/flxbl-io/sfops/commit/fd984954c8ac5ac7421c9cd72b6668815748bbab))
* **actions:** add timeout to github command ([758efdb](https://github.com/flxbl-io/sfops/commit/758efdbf9341473d0b6cae435b54b4358e1b36b3))
* **actions:** better expiry logic for sandboxes with extend mechanism ([a458e8f](https://github.com/flxbl-io/sfops/commit/a458e8f2e262097386bc1dd8378cba12d5e2f43a))
* **actions:** change to run command ([3f64f2b](https://github.com/flxbl-io/sfops/commit/3f64f2bee3c6c9ea02b0adf55021c6fbd7ff12ee))
* **actions:** ensure check sandbox has a timeout for 10 seconds ([91257ba](https://github.com/flxbl-io/sfops/commit/91257ba4fc53eec2e1f88c0e522a64d94ca4253b))
* **actions:** ensure gh_token is set in env for using gh_cli ([6fc202a](https://github.com/flxbl-io/sfops/commit/6fc202a53644ccc8a760747c718ab0985f82133f))
* **actions:** ensure github variable is deleted when sandbox is deleted ([966fb6c](https://github.com/flxbl-io/sfops/commit/966fb6c9718525cbef486df75c8fb21ff2002302))
* **actions:** ensure paginate across whenever variables are consumed ([181944a](https://github.com/flxbl-io/sfops/commit/181944a4b88afe12989bf90fd8612036f8e76ce2))
* **actions:** ensure releaselogs are copied from prod for hotfix ([4ef2128](https://github.com/flxbl-io/sfops/commit/4ef2128f6a016d5d91dddf96fdc25eccfc84edea))
* **actions:** ensure the path of patched releaselogs into domain ([b17c7fd](https://github.com/flxbl-io/sfops/commit/b17c7fd728d1721a5abd285b9ae10d180c104683))
* **actions:** fix checkSandbox incorrectly exiting when no developer sandboxes are assigned ([400474a](https://github.com/flxbl-io/sfops/commit/400474a9d4223db2ea45b9aeeceef66560c8fcdd))
* **actions:** fix incorrect alias used ([7847f11](https://github.com/flxbl-io/sfops/commit/7847f11ff90b9cad6ba67865e9fb16471f23013c))
* **actions:** fix incorrect error handling with renew and extend ([4d38e20](https://github.com/flxbl-io/sfops/commit/4d38e20a76df6f82d1a5f711a5bce1fdce38b40b))
* **actions:** fix incorrect name used in action ([562fd24](https://github.com/flxbl-io/sfops/commit/562fd24e72d9ca281da2c43fe16a560b528c3692))
* **actions:** fix incorrect parsing of values ([ff34010](https://github.com/flxbl-io/sfops/commit/ff340108102170aabba6773890eb135eb3b870e2))
* **actions:** fix incorrect referral to Delete Sandbox ([23b501a](https://github.com/flxbl-io/sfops/commit/23b501ab6ce5621df051d922cfab1b3d6620ef53))
* **actions:** fix incorrect sandbox allocation ([a396290](https://github.com/flxbl-io/sfops/commit/a39629093ebe9d93424e3cdc223dcef62a1552db))
* **actions:** fix incorrect var defn ([bfebaa6](https://github.com/flxbl-io/sfops/commit/bfebaa628fe760912496b7ecf292fada71b32a73))
* **actions:** fix install gh-merge-json for refreshUrl ([1a4d362](https://github.com/flxbl-io/sfops/commit/1a4d362aa10bb0847cafeb03aa1ea9b70620857e))
* **actions:** fix missing addition of gh merge ([348c804](https://github.com/flxbl-io/sfops/commit/348c804d2430c891a94a3524b151a93711d2c616))
* **actions:** fix refreshFrontDoorUrl to be accurate ([cf75adc](https://github.com/flxbl-io/sfops/commit/cf75adc1a2bdc5088a47d1de30d31c63d70b185d))
* **actions:** fix token expiry when tests take longer to run ([604f118](https://github.com/flxbl-io/sfops/commit/604f1189d11696d74901a9a1abe4b2c17ff980d7))
* **actions:** gh fails to return merged entities when paginated ([3a56337](https://github.com/flxbl-io/sfops/commit/3a563373f96abaeaded9d2d510c2848e9c3645d1))
* **actions:** handle logic when sanbox is already expired ([565b9b8](https://github.com/flxbl-io/sfops/commit/565b9b83a661cbdc87f4508f824ab966e14c042e))
* **actions:** incorrect json parsing at sandbox status reporter ([0088670](https://github.com/flxbl-io/sfops/commit/0088670cc51d30e1eb6e31b365d283ca9d844323))
* **actions:** incorrect output and incorrect action assignment ([e95b54d](https://github.com/flxbl-io/sfops/commit/e95b54d471704a419827dabf0eaaec6a43377009))
* **actions:** incorrect syntax in git configuration ([8a7a34f](https://github.com/flxbl-io/sfops/commit/8a7a34f93e0f489ee51076172943c8f5228d8d39))
* **actions:** lock only if there is not a inuse org ([8b726d0](https://github.com/flxbl-io/sfops/commit/8b726d061d963a82174f3ebaeb3d792f5df295d3))
* **actions:** package visualization should support both yml and yaml ([10d5675](https://github.com/flxbl-io/sfops/commit/10d567528d1aabda0406b0cfa30e08b486575518))
* **actions:** remove node deps from this action ([3a5ef55](https://github.com/flxbl-io/sfops/commit/3a5ef551724da8caab846eba53885e3a41369b07))
* **actions:** remove un necessary logs ([59107b0](https://github.com/flxbl-io/sfops/commit/59107b0771988b529a15d0e465241f0559e7acc6))
* **actions:** use jq correctly after using json-merge ([72553e9](https://github.com/flxbl-io/sfops/commit/72553e9e8185b424e577e3970b08416744d6f116))
* add .vscode to git ignore ([d30b31b](https://github.com/flxbl-io/sfops/commit/d30b31b7bd493206ee0e3066f095a9867b9af755))
* add a 2 second delay and logs ([892c56d](https://github.com/flxbl-io/sfops/commit/892c56d79ff20627eb513b08de21b7816cc35977))
* add a check not to trigger creation ([d77e91d](https://github.com/flxbl-io/sfops/commit/d77e91d5c4d2d824e19a67087b57b02ce4f689ea))
* add a check when issueStatus is null ([730a249](https://github.com/flxbl-io/sfops/commit/730a24961e7365791ccab68bde50fce4308bf2b8))
* add a log ([a64986c](https://github.com/flxbl-io/sfops/commit/a64986c15c584c760619bcbfc02c42d7c8197875))
* add a log for displaying matched check id ([43a7c08](https://github.com/flxbl-io/sfops/commit/43a7c08c58415bbf5f82dc113b1a952e3632e524))
* add a message saying this is only for sandboxes ([85d8f55](https://github.com/flxbl-io/sfops/commit/85d8f55fcc6bffb15e9966694a84ad83e37be057))
* add a process exit with success ([16a70da](https://github.com/flxbl-io/sfops/commit/16a70dad241270e1c77959e4af793d93dfa12eca))
* add a version check ([79efdbd](https://github.com/flxbl-io/sfops/commit/79efdbd2d515eba051c6247d2d03441a43ba47e7))
* add a workspace to findReleaseDefn ([45f8476](https://github.com/flxbl-io/sfops/commit/45f84769dbf17b8d42f3eb5048e1d7890461d1e7))
* add additional debug statements ([9351c70](https://github.com/flxbl-io/sfops/commit/9351c7009a5cff34a70f4d32cfb7fd0568c360e1))
* add additional error handling ([99cbecc](https://github.com/flxbl-io/sfops/commit/99cbecc50ac6e1f01bd43d9ed85c796dbc0532ef))
* add additional logs ([7bc4d92](https://github.com/flxbl-io/sfops/commit/7bc4d92b8b6acda4d40f38557aa3e414b0e4bf7a))
* add additonal plugins ([57ca532](https://github.com/flxbl-io/sfops/commit/57ca53270e01225111b309e6270dc956bf50e58b))
* add additonal unlock status ([d7f6269](https://github.com/flxbl-io/sfops/commit/d7f6269db312274d67f6bf7ff2000f1f3fe5f7be))
* add an additional app token ([d69d735](https://github.com/flxbl-io/sfops/commit/d69d735b5b6267c49c27989e299a9aa0d31c100a))
* add an additional flag ([aa4bb9c](https://github.com/flxbl-io/sfops/commit/aa4bb9c1c03bc52bb62825d2ba9b01113c14c328))
* add branch and error handling ([9af7f26](https://github.com/flxbl-io/sfops/commit/9af7f26c4aaefda4960fc3f73468228a20741821))
* add branch if not provided ([5dd2392](https://github.com/flxbl-io/sfops/commit/5dd2392d9a06d763fe723d1c278acb3f13f46b18))
* add branch to expire sandbox ([34371c5](https://github.com/flxbl-io/sfops/commit/34371c5cc5020cf66cc934964a86dc204a8e47b1))
* add branch to lock ([36fad37](https://github.com/flxbl-io/sfops/commit/36fad37c35a400bdffcba39c426ee09ace7ccee6))
* add branch to releaseName fetcher ([5f1872c](https://github.com/flxbl-io/sfops/commit/5f1872c380cd82330b44e1b7f39d5196d76ca42f))
* add build for checkCiSandboxStatus ([a91d199](https://github.com/flxbl-io/sfops/commit/a91d199150fee419d1659ea76d308152cd6a4f10))
* add build job to combine packages ([6d0f1c5](https://github.com/flxbl-io/sfops/commit/6d0f1c5816b50e26bb955de5f16b61ebda6fcc30))
* add continue on error true temporarily ([a2c04a7](https://github.com/flxbl-io/sfops/commit/a2c04a74ec09d8a20c95a2a104ab67c1ee61a27e))
* add dashboard repo ([131d497](https://github.com/flxbl-io/sfops/commit/131d49799744f16c4f1f02edca056fdb6b62f232))
* add env specific auth url ([f10cdc7](https://github.com/flxbl-io/sfops/commit/f10cdc72ae46089862bbd60c99363dbae18e8a2d))
* add env variables to apex test ([d7c2866](https://github.com/flxbl-io/sfops/commit/d7c2866e448e93f099765301e5f18ec4c14392ba))
* add env_sfdx_auth_url to apex tests ([f5d77d8](https://github.com/flxbl-io/sfops/commit/f5d77d8967f631131623b40efee1b3d2649cb472))
* add environment to test ([7c084ec](https://github.com/flxbl-io/sfops/commit/7c084ece1111574d73636f97cd0be8d980c4b446))
* add explict auth ([04f03b6](https://github.com/flxbl-io/sfops/commit/04f03b6b243c9264dc349701b2c4ec503ab523ad))
* add explict scope to auth ([8094d6a](https://github.com/flxbl-io/sfops/commit/8094d6a10962bfed4deeaafda94031dfb2729f2e))
* add eyes to reaction ([61c658c](https://github.com/flxbl-io/sfops/commit/61c658c9d48c5549374dc492adabfee84059fa3f))
* add fetch depth to reusable workflows ([2703506](https://github.com/flxbl-io/sfops/commit/2703506b87aec535fd0e17210736275b741ec66e))
* add forced status ([0a41969](https://github.com/flxbl-io/sfops/commit/0a419697f264639d030a753f390cf7777606ad83))
* add forcetest to skip review ([dd26032](https://github.com/flxbl-io/sfops/commit/dd26032895ecfaee5c1fe271ca492ad8bd928d13))
* add future availability per pool ([3ca4fc1](https://github.com/flxbl-io/sfops/commit/3ca4fc18937392861ce0796989776e96ef4437ee))
* add git config ([6e8cac4](https://github.com/flxbl-io/sfops/commit/6e8cac436dd2770addfa78265529cd19b171b6ad))
* add github event number ([8d45ac6](https://github.com/flxbl-io/sfops/commit/8d45ac6370d3f85a5c62299629f10e039eb1852e))
* add intro section to PR ([8731f90](https://github.com/flxbl-io/sfops/commit/8731f90ad9e27cd10906388123703aa07366770d))
* add issue -check ([691327a](https://github.com/flxbl-io/sfops/commit/691327aaef4924cbd7050f540edf9b55daf8c396))
* add issue deployment number ([bd88dfc](https://github.com/flxbl-io/sfops/commit/bd88dfc09d7beb5fa60b8a0b4b63f7ec203a2ba1))
* add issue number correctly ([8bd7971](https://github.com/flxbl-io/sfops/commit/8bd7971162698c0532431abdee6549538b7e48a2))
* add lock file ([ea4786f](https://github.com/flxbl-io/sfops/commit/ea4786f1ea8c818c8fd88510292f6cccadf3fe1f))
* add metrics provider to all workflows ([5244f5c](https://github.com/flxbl-io/sfops/commit/5244f5ceaaab7c8bbbcf157fe1f8e5bd5dd2d45e))
* add metrics-provider ([213aa1a](https://github.com/flxbl-io/sfops/commit/213aa1a6ecd5e82a64c23670d72890956ffd0f4e))
* add missing await ([b45f115](https://github.com/flxbl-io/sfops/commit/b45f1153ead76cdacf5f7d6a3326fc4e9d14df61))
* add ncc to bundle ([803e2a5](https://github.com/flxbl-io/sfops/commit/803e2a57135d9ea79aec4afcdb964f632b0e398a))
* add origin to branchname ([fbc3c43](https://github.com/flxbl-io/sfops/commit/fbc3c43af36c4f1951fc481dbe938de6dc36183c))
* add other emotes to presets ([43e93fb](https://github.com/flxbl-io/sfops/commit/43e93fb7fc0dd7b51673a6eae64c38aa24f85802))
* add releaseName to seperate lock out ([a79d449](https://github.com/flxbl-io/sfops/commit/a79d449779d3802d5bffab5114402f74d559d713))
* add releaseName to status ([81aa540](https://github.com/flxbl-io/sfops/commit/81aa540d85515cd3b245379ad7d536dc08b3acf4))
* add repository path to retrieve branches ([c27fde4](https://github.com/flxbl-io/sfops/commit/c27fde4ff2c1533d61b8fdedaff93527b47748dd))
* add snapshot environment to build-test-publish ([065f6fd](https://github.com/flxbl-io/sfops/commit/065f6fd84f6c8b0e9e53b5865931819cb2917331))
* add some redundancy around creating a user ([b6ecc30](https://github.com/flxbl-io/sfops/commit/b6ecc30b1d0ca7b9371926a858ce360dcc83abd9))
* add stdio inherit to see whats happening ([f03e033](https://github.com/flxbl-io/sfops/commit/f03e0330337f049a0f17067d9a716d2da35cf5cc))
* add success comment ([c4ee366](https://github.com/flxbl-io/sfops/commit/c4ee36695eba1f53ec51dae797db800ebdf296c5))
* add support for force test ([5214ab0](https://github.com/flxbl-io/sfops/commit/5214ab0cbf347d0f0013758d03ad9266d0b5dcbd))
* add sync customer with an additional var ([6559185](https://github.com/flxbl-io/sfops/commit/655918509b254baded1be38b98f85e5fd4b598b2))
* add temporary workarounds to propagate  urls ([4d982d3](https://github.com/flxbl-io/sfops/commit/4d982d36c6ddd836d98cc27ae80f47273b3130f3))
* add thumbnail folder to ignore ([062d1e2](https://github.com/flxbl-io/sfops/commit/062d1e2191fe94d54bd3e2cae343bf4f8884a848))
* add type of jira ([c37c90d](https://github.com/flxbl-io/sfops/commit/c37c90dc1c3be2710c43dc7ba9ad284b7b0b494f))
* add up minimum runs to 0 ([cda87a4](https://github.com/flxbl-io/sfops/commit/cda87a4b94776a902a80153d3a4a0a9bac87361a))
* add warning to force push ([cf3849d](https://github.com/flxbl-io/sfops/commit/cf3849df535566766201b7b242b1a0dbb84315a5))
* **allocater:** ensure vars are paginated properly ([5decdc3](https://github.com/flxbl-io/sfops/commit/5decdc38f24c410049e55d24a46e1611b34e51e9))
* **allocater:** refresh token for allocater ([cdc3a0b](https://github.com/flxbl-io/sfops/commit/cdc3a0b288fe97d97b6a5cc42e4363185d883734))
* build - publish ([c1e6d46](https://github.com/flxbl-io/sfops/commit/c1e6d46240f644b997bcb49ca074b21410e2a18b))
* change default to sfops test ([e35d653](https://github.com/flxbl-io/sfops/commit/e35d653cf03047e9460944f0a00220107230b34f))
* change ownership ([7f45f17](https://github.com/flxbl-io/sfops/commit/7f45f17c5017b477901e3e9a7b9d28cd9d038593))
* change security permission of script ([a18469e](https://github.com/flxbl-io/sfops/commit/a18469e66e8a6a8df771514be21bac285a3fa9fb))
* change to pull request number ([560cced](https://github.com/flxbl-io/sfops/commit/560cced2e47cc1ff36562f4c66c01fe7198f52f6))
* **checkCISandbox:** incorrect profile name ([e097db5](https://github.com/flxbl-io/sfops/commit/e097db5585fed1adf8823f93beaafa8ee3cb1cfb))
* **checkSandbox:** add a display to name ([649ec1f](https://github.com/flxbl-io/sfops/commit/649ec1fa7cedbf3e2ab1d3a6126cc550efcccdd6))
* **checkSandbox:** add only 1 attempt ([f1eea2e](https://github.com/flxbl-io/sfops/commit/f1eea2eb30fddf49ee323c21ed3537fbbdd1d277))
* **checkSandboxes:** use pagination correctly ([70dfcc0](https://github.com/flxbl-io/sfops/commit/70dfcc044c983db3eff04b5102796d0461fc363e))
* **checkSandbox:** fix missing syntatic element ([ace55ae](https://github.com/flxbl-io/sfops/commit/ace55ae6a627d4f71cd14e587d4d350680840de1))
* **checkSandbox:** incorrecct json stringify ([68d5c75](https://github.com/flxbl-io/sfops/commit/68d5c75b049f2708e544b87009ba0f3ab0212ceb))
* **checkSandbox:** incorrect messageAssignement ([695c98e](https://github.com/flxbl-io/sfops/commit/695c98ee5b96f602a463d0e416b7e1f8c27329ed))
* **checkSandbox:** Incorrect variable to comment ([e55dd6b](https://github.com/flxbl-io/sfops/commit/e55dd6bd657bb0208545969669976f3f00202008))
* **checkSandbox:** reduce attempt to 2 ([d9caa2c](https://github.com/flxbl-io/sfops/commit/d9caa2cbcb0e0cafbb0fe44254ec30e1595472dd))
* **checkSandboxStatus:** add dedent to prettify coment ([9a1e120](https://github.com/flxbl-io/sfops/commit/9a1e120f60f0dee620a1c6213e08ba75f52fcdac))
* **cherrypicker:** fix cherrypicker to create labels ([bcbc408](https://github.com/flxbl-io/sfops/commit/bcbc4086562813733083f0ed84e4afebdec97cbc))
* **cicd:** fix incorrect syntax ([434d49c](https://github.com/flxbl-io/sfops/commit/434d49c2fd9ac9b33e7f31165ed99033c56550bc))
* **cicd:** fix test repo script location ([5a7f3bf](https://github.com/flxbl-io/sfops/commit/5a7f3bfada0e651fabbf61bdec52e40987208e2d))
* **cicd:** remove build stage for bundler ([8ddc341](https://github.com/flxbl-io/sfops/commit/8ddc341cdd98b55d6862ae9e3bc5c121ebc6b4c9))
* **cicd:** remove docker build to when required ([0d19b91](https://github.com/flxbl-io/sfops/commit/0d19b912ebeeabed1cb34056a2a0a6cf3bcf21cb))
* close pending actions workflo ([25d3343](https://github.com/flxbl-io/sfops/commit/25d3343d201c8eb410becb8ddbbfb04871590127))
* comment used on branchDeploy ([f24ed95](https://github.com/flxbl-io/sfops/commit/f24ed95166a78abc6a5a91dcbd20687ca3be43b3))
* comments flowing out when org is not available ([cd360a4](https://github.com/flxbl-io/sfops/commit/cd360a4c93086211254ef428ae68144c3ec9953a))
* composite action do not support ([5207a4c](https://github.com/flxbl-io/sfops/commit/5207a4cd5b5bfe81f39b755a2ae4efc19d812df7))
* converge push to branch ([8e4704a](https://github.com/flxbl-io/sfops/commit/8e4704ac3e832ff7489fd049e107bf24e9c3e906))
* create-dev-sandbox ([21ebdc5](https://github.com/flxbl-io/sfops/commit/21ebdc59529dbe99dcf4e55bcce53e341352df30))
* **createDevSandbox:** fix incorrect variables used ([6d0c37a](https://github.com/flxbl-io/sfops/commit/6d0c37af68c4397e21a215041f4acff6011359ba))
* **createPatchReleaseLogs:** fix do not create a new branch ([5816fba](https://github.com/flxbl-io/sfops/commit/5816fba5a0b3a443bfcf01513e61bed1baa79ad7))
* **createSandboxForDev:** remove incorrect usage of resolve ([099246d](https://github.com/flxbl-io/sfops/commit/099246dd64be8a721a4d11d2121733474c5aa69d))
* **createSandbox:** handle token correctly ([f3adcb7](https://github.com/flxbl-io/sfops/commit/f3adcb783cc8e61664886be6d602c7e009773ba7))
* **createUser:** ensure username is read correctly ([16a233f](https://github.com/flxbl-io/sfops/commit/16a233f85cefaec81fd7c6ba9aefa42d1740a2c6))
* **createUser:** incorrect id being parsed ([1aad78d](https://github.com/flxbl-io/sfops/commit/1aad78d63ee1cb6fc8022ae55557264d7fdcb6b7))
* **dashboard:** add an hours option to expiring soon ([7d48252](https://github.com/flxbl-io/sfops/commit/7d48252e9bc8387af78c490d54d04a3245bf184d))
* **dashboard:** add an unless mode for ready PRs ([bd4d028](https://github.com/flxbl-io/sfops/commit/bd4d02808f49bd34a09c29222fca897a38ce1cfc))
* **dashboard:** add an unless to workitems in ready state ([d115b02](https://github.com/flxbl-io/sfops/commit/d115b024097bf2047d78403c3f1c9ed4c1230a1f))
* **dashboard:** add fluid container to viewer ([2e4ace6](https://github.com/flxbl-io/sfops/commit/2e4ace6ab6175e449d7c8758c59ac51132464d7a))
* **dashboard:** add social unfurl to check whether github pages unfurl goes away ([840e750](https://github.com/flxbl-io/sfops/commit/840e750e91a53ab36ebf679ff4fe54f60c3c42ec))
* **dashboard:** add sorting for review sandboxes ([1dbd099](https://github.com/flxbl-io/sfops/commit/1dbd0993a33be02568020272c4b49334ef0e2f69))
* **dashboard:** do not remove buttons when sandbox is expiring ([c689b29](https://github.com/flxbl-io/sfops/commit/c689b292a14e0d06dfb6c509e191528407bde7cc))
* **dashboard:** ensure correct links are displayed ([5cbe12c](https://github.com/flxbl-io/sfops/commit/5cbe12c3e0f96651ffc354ddca46a2c20515d2af))
* **dashboard:** fix btn to primary ([c561810](https://github.com/flxbl-io/sfops/commit/c561810ede7a6b3434a40bbed6fb695f4af890d9))
* **dashboard:** fix display of changed artifacts ([2f5da73](https://github.com/flxbl-io/sfops/commit/2f5da738fd29bc28ba8d0aabd5653a13491dae2f))
* **dashboard:** fix incorrect mesasging ([b8e56c6](https://github.com/flxbl-io/sfops/commit/b8e56c6f75a898f69563017997a090ff5d2823f1))
* **dashboard:** fix message on expring sandboxes for dev ([60c0fb3](https://github.com/flxbl-io/sfops/commit/60c0fb3cfa93a25d09eb2b7172b7c3db5aea2165))
* **dashboard:** make the button small ([bd203f5](https://github.com/flxbl-io/sfops/commit/bd203f50ecd44dcbfa412ac5ae668c6c9d507f53))
* **dashboard:** make the table flud to prevent rows from big ([45620db](https://github.com/flxbl-io/sfops/commit/45620db751d52278e2b1c52c6acabb7e695f7620))
* **dashboard:** move to dribble's cdn for new tab ([927bf06](https://github.com/flxbl-io/sfops/commit/927bf06e4408ccf6b81d8a855349d2572ae5c156))
* **dashboard:** move to nodeJs ([c2dd52f](https://github.com/flxbl-io/sfops/commit/c2dd52f6d621b70b74a55824c4ffe1d43cba8aa0))
* **dashboards:** fix date display in releases to allow sorting ([e9980fb](https://github.com/flxbl-io/sfops/commit/e9980fbc98acd637750dfbb7613aa48323238ddd))
* **dashboards:** fix ordering with dashboards first ([770c612](https://github.com/flxbl-io/sfops/commit/770c612b3c79a96d238ce1a7758733c0e994c995))
* **dashboards:** fix title used in sharing ([26eb746](https://github.com/flxbl-io/sfops/commit/26eb746950ca969480b45b46b7ac711bb0377f7f))
* **dashboards:** make table fluid ([9d99e09](https://github.com/flxbl-io/sfops/commit/9d99e09fd7ca72b09c677e354e2eb9e595eb5492))
* **dashboards:** modal not displaying ([79b464f](https://github.com/flxbl-io/sfops/commit/79b464fa039663fd5380ea3061117ff7fce07f96))
* **dashboard:** update css of the package vieewer ([edf88e0](https://github.com/flxbl-io/sfops/commit/edf88e0c39fd1d6b7ce77855017002ee45112c10))
* **deleteSandbox:** prettify logs ([007e490](https://github.com/flxbl-io/sfops/commit/007e490f87d6756992570aaa56ab2e768e1273f2))
* display comments if branch deploy  is valid ([464291e](https://github.com/flxbl-io/sfops/commit/464291eb305c3326d9e44c3efcfddf28d8bf8f53))
* do not delete .get in the target directory ([b7aa82f](https://github.com/flxbl-io/sfops/commit/b7aa82ff15cbe2cc3c2d062b47ca8e0dea6807a1))
* do not fail if base branch deletion is unsucessful ([791de9a](https://github.com/flxbl-io/sfops/commit/791de9a829b0028f64e241b01afb2f716723df39))
* do not fail when package evolution is missing ([5613702](https://github.com/flxbl-io/sfops/commit/56137022c9e91523d50005c28c7cf2174e43b5fa))
* do not lock if a sandbox is in use ([f9f6d37](https://github.com/flxbl-io/sfops/commit/f9f6d373014c9e1fb9d8124e06931b455e134ee9))
* do not refresh positions for intro mesage ([f0a8b73](https://github.com/flxbl-io/sfops/commit/f0a8b738147c8f47d5400144c2334a9ddefa46c2))
* do not reload iframes ([a7c6044](https://github.com/flxbl-io/sfops/commit/a7c6044898fbfabf4758baf48041a2ab7c4918c4))
* do not update release names ([3a00794](https://github.com/flxbl-io/sfops/commit/3a00794dbb77ba4acb68f52a739694244ffb5a8c))
* **docker:** ensure auth for gh bug ([57b289b](https://github.com/flxbl-io/sfops/commit/57b289bbce3e8ef32c5e1c5026d7b23256dd4bd7))
* **docker:** install on runtime ([c10314e](https://github.com/flxbl-io/sfops/commit/c10314e948b6fa418d61c69db69ed53cb8408bbf))
* **docker:** migrate images used to flxbl-io sfp ([b80b39d](https://github.com/flxbl-io/sfops/commit/b80b39df8baae5f9d38f992a3c839da6b32ff68e))
* **docker:** switch to stable image ([d2ce4c3](https://github.com/flxbl-io/sfops/commit/d2ce4c3e26e1a2168641bf831e6c940212c37a44))
* **docker:** use env variable and remove with --token ([d820efc](https://github.com/flxbl-io/sfops/commit/d820efceac3468be956ea7999af9fbafdc9887e3))
* ensure bash script is correct ([3d766a2](https://github.com/flxbl-io/sfops/commit/3d766a2779dde2bcdd889cfa3496f553b009fd66))
* ensure checkActions do not fail ([ec103d2](https://github.com/flxbl-io/sfops/commit/ec103d229bf4f34adc5e64413b97824ea2f1e04c))
* ensure correct variable is used ([1283160](https://github.com/flxbl-io/sfops/commit/12831607abc7460aec8bd796b5289ec24c43ffd3))
* ensure dashboard repo is everywhere ([80d2328](https://github.com/flxbl-io/sfops/commit/80d2328c402160004620b8e2565bf095590f8b04))
* ensure full remote url is read ([4f70f3f](https://github.com/flxbl-io/sfops/commit/4f70f3fd3b9f974f7ae9bae8c915ab4f8f10ce02))
* ensure reviews are required ([8bf7430](https://github.com/flxbl-io/sfops/commit/8bf74305a6bbbdc67ff7209791ce295590702989))
* ensure tags are visible ([2fbff3a](https://github.com/flxbl-io/sfops/commit/2fbff3a7708c237ca8b0d3b499ba077c9dc432ed))
* exclude git and node modules ([e7e96c2](https://github.com/flxbl-io/sfops/commit/e7e96c2e75f168077f63606bf1677d4137cb537f))
* exclude other data dirs ([b13d943](https://github.com/flxbl-io/sfops/commit/b13d943673b427b406a14352b7d7b6f3ab39bac7))
* expiry of sandboxes ([6330134](https://github.com/flxbl-io/sfops/commit/63301344213d059a6b64e2e58a6b5b4199393541))
* fetch sandbox var ([6b4dc21](https://github.com/flxbl-io/sfops/commit/6b4dc217ef62f264f7225f34d2afed1b1c1ebea5))
* **fetch:** fix sandbox fetch logic ([d57cea4](https://github.com/flxbl-io/sfops/commit/d57cea4bfcd5b2a48985e5a825d7ae561ef47b0d))
* **fetch:** incorrect repo parameter ([49c3f06](https://github.com/flxbl-io/sfops/commit/49c3f06dd2573f777806b05b23070a88b869da71))
* **fetch:** pass issue-number to fetch action ([6042a9a](https://github.com/flxbl-io/sfops/commit/6042a9a79162c60de69f99eebf3b09e128985418))
* **fetchSandbox:** add logs and return expired sandboxes ([50b38be](https://github.com/flxbl-io/sfops/commit/50b38be2e66b457b8e57d784ce3b84baf601dc6f))
* fix add conditions ([d6c5d17](https://github.com/flxbl-io/sfops/commit/d6c5d17b321d9f2f68f7043fdfb187a3c699163b))
* fix add missing dashboard repo param ([f9702cd](https://github.com/flxbl-io/sfops/commit/f9702cdee452ff5202e9e8633120985381c2f395))
* fix add path to outputs ([900377e](https://github.com/flxbl-io/sfops/commit/900377ed6d377b5dc20c003255188a857af2cd47))
* fix argument positionals ([bbf7efe](https://github.com/flxbl-io/sfops/commit/bbf7efed0eedff450ca157bfe5f098e63f733a2d))
* fix base ref ([c851c32](https://github.com/flxbl-io/sfops/commit/c851c32434286c3ef404be7fef51a58a8318afb2))
* fix bash syntax for if ([489fda7](https://github.com/flxbl-io/sfops/commit/489fda75cb6c899cea133f5c978d72b079aa8a2e))
* fix branch name used ([7cb7802](https://github.com/flxbl-io/sfops/commit/7cb7802b0fb8927360a3e6d342647e7108c5de41))
* fix comment to use issue number ([6a204ff](https://github.com/flxbl-io/sfops/commit/6a204ffc84806400d786b488ccd68ffc87c74175))
* fix comments and order of args ([c210623](https://github.com/flxbl-io/sfops/commit/c210623b06db1d484fcca3400a0af2c41af3bc2b))
* fix conclusion ([d1a4fda](https://github.com/flxbl-io/sfops/commit/d1a4fda11589f190fd260a0c887e1958ab384961))
* fix defaults ([c72b928](https://github.com/flxbl-io/sfops/commit/c72b9284fbe06574a65503ce89b143f3524b5ede))
* fix duplicate jobs ([0128890](https://github.com/flxbl-io/sfops/commit/0128890376834821f6e759c5c03041a96b0c5458))
* fix elaspsed time ([c9b8c18](https://github.com/flxbl-io/sfops/commit/c9b8c1832c727d90a60af07abdbf86762f18dbf2))
* fix headers to be consistent with semantics ([e86dead](https://github.com/flxbl-io/sfops/commit/e86deade88cf973707747b7c29ae14a4488196f6))
* fix icons ([e1c57ca](https://github.com/flxbl-io/sfops/commit/e1c57cad505775ea3a3a30266a2a53ba43553c89))
* fix incorrect output redirection ([b89d822](https://github.com/flxbl-io/sfops/commit/b89d8229935178524f31a54757ba978fca1c3a4c))
* fix incorrect syntax used ([78fe2d3](https://github.com/flxbl-io/sfops/commit/78fe2d33798103ca4daf3aa470cb5d87967ab386))
* fix incorrect syntaxt used ([dbfc460](https://github.com/flxbl-io/sfops/commit/dbfc460b9f9d41eae4707c5180e27b660d1d4d03))
* fix incorrect var used ([3b0b9ed](https://github.com/flxbl-io/sfops/commit/3b0b9ed164e0a895743be681fffa308049cbadd3))
* fix incorrect var used ([e70dcf5](https://github.com/flxbl-io/sfops/commit/e70dcf5a38b9dacdb96ce2c0455018ee1d0f5a6e))
* fix incorrect variable passing ([a5f57ff](https://github.com/flxbl-io/sfops/commit/a5f57ff502c1ce4560e65343f3b95d49762db0ea))
* fix incorrect variable used ([e5b511a](https://github.com/flxbl-io/sfops/commit/e5b511ae2a5df59dff0c259cf5e394222e2536c9))
* fix issue number ([2807b35](https://github.com/flxbl-io/sfops/commit/2807b35cb85f199c30e621a671a8cb9db93f4b91))
* fix issue with bash syntax ([4a97ae2](https://github.com/flxbl-io/sfops/commit/4a97ae2b69e3a9ce63a5e01115b846c9525a0e02))
* fix issue with missing dist and easier placement for test ([474a1a4](https://github.com/flxbl-io/sfops/commit/474a1a40106f831d3ebc73edfc187e2351f2588a))
* fix job name ([b56f64a](https://github.com/flxbl-io/sfops/commit/b56f64a53bd234f1761549025145afc552414898))
* fix lack of issue in forced test mode ([63edaa8](https://github.com/flxbl-io/sfops/commit/63edaa8b6b6a7d9a7e13852c814c6e47cf43d5cc))
* fix linter messages ([df3b790](https://github.com/flxbl-io/sfops/commit/df3b7907ee177a4cc31f498f8b18b748e422fba3))
* fix lock command ([a2df12d](https://github.com/flxbl-io/sfops/commit/a2df12dba2bf992a0f28917e0541047f4abc5233))
* fix name used ([ef5a69e](https://github.com/flxbl-io/sfops/commit/ef5a69e091cff18fa6293e420b00d8be27a79200))
* fix path used in findReleaseDefn ([f1b2463](https://github.com/flxbl-io/sfops/commit/f1b2463bdab02aae5cb737eb5fa72947e6aca04b))
* fix pool inputs ([ede1f2f](https://github.com/flxbl-io/sfops/commit/ede1f2f9cd021d95cc0df7ddaed3183349ac3d15))
* fix push to repo + incorrect reactions ([d7edf7d](https://github.com/flxbl-io/sfops/commit/d7edf7d08f5457e15b10a9d6080ebf6941beed26))
* fix release defn ([5b321d4](https://github.com/flxbl-io/sfops/commit/5b321d4581da6847ba0700278c8201ae1b5c36dc))
* fix remove deployments ([affb757](https://github.com/flxbl-io/sfops/commit/affb75780ba6b7f52e58952554f4813029083d7e))
* fix renew mesage ([adccce3](https://github.com/flxbl-io/sfops/commit/adccce34956343f1a336de6d1e8c50a99d0fb56a))
* fix scripts ([e68f410](https://github.com/flxbl-io/sfops/commit/e68f410aff376a84267955c75013b18e1464d6a9))
* fix scripts to use GH_TOKEN ([4338c19](https://github.com/flxbl-io/sfops/commit/4338c196652be32ef95015f08b9242620345d555))
* fix slight better handling ([4b3f072](https://github.com/flxbl-io/sfops/commit/4b3f072eec6b23483a8c7ba3936b2ca31ee1834f))
* fix status handling ([bf7e950](https://github.com/flxbl-io/sfops/commit/bf7e950d1e10138004688a21101cd3a369275cf5))
* fix status of issues ([6668838](https://github.com/flxbl-io/sfops/commit/6668838c09fb3e3033c7ddfe9e304fb47417fdcc))
* fix syntanx issue on condition ([b1c1468](https://github.com/flxbl-io/sfops/commit/b1c146809bb9f9e7e5e8b7fa99e18d5d4e1c498e))
* fix syntax error ([d0edf6a](https://github.com/flxbl-io/sfops/commit/d0edf6afa36361e599428ad395e2bb4eee9ab12d))
* fix syntax error on branch deploy ([f4bc212](https://github.com/flxbl-io/sfops/commit/f4bc212b12cd82a97bb7106d2aa160726c5031ee))
* fix syntax error on createSandbox ([c186dc4](https://github.com/flxbl-io/sfops/commit/c186dc4165a2362934365b79ac51c2ccdbf77a36))
* fix syntax in format ([12caa8f](https://github.com/flxbl-io/sfops/commit/12caa8fc8477d69e58c75b819739ceb0c6fd30c3))
* fix typo with action path ([3f90142](https://github.com/flxbl-io/sfops/commit/3f90142da35a5f2073c09e3b2a2dcc7bed54ca8a))
* fix typo with usage ([2b27897](https://github.com/flxbl-io/sfops/commit/2b278971a440eec492e5a13300132b047835c762))
* fix use of correct check name through out ([680f58f](https://github.com/flxbl-io/sfops/commit/680f58f2bae87b56f894fda4898ffa6e583e534a))
* fix workflow incorrectedness ([9362a9d](https://github.com/flxbl-io/sfops/commit/9362a9dc17a5b4ac05ecea5c913b6709451f942d))
* fix workflow syntax ([7e465fd](https://github.com/flxbl-io/sfops/commit/7e465fd97d46fa796aab52fd7c39ac0c9698ec54))
* fixy syntax error on branch deploy ([4aa2e14](https://github.com/flxbl-io/sfops/commit/4aa2e14e6880f382328bd275bd7cf6df158d766b))
* handle condition where runid is not available ([0de10ed](https://github.com/flxbl-io/sfops/commit/0de10edd2af8a812dacb851848ff53b944b752e7))
* handle no change scenario ([1b3bdb2](https://github.com/flxbl-io/sfops/commit/1b3bdb22c3d0265ed8f24b9ad8ea07c1de2e6b4f))
* handle unlocked ([ce352d2](https://github.com/flxbl-io/sfops/commit/ce352d2bce1ee6e63ed3374944e27ebe3dae7fc6))
* how files names are handled ([dc70c36](https://github.com/flxbl-io/sfops/commit/dc70c360c5031e0df45f125583c8e3ce1dcf09e7))
* if extension is not proided ([0e6c9ab](https://github.com/flxbl-io/sfops/commit/0e6c9aba026e06cca3ba09dbf316c2cb2d112dc2))
* incorrect branches and update status for each env ([75c13eb](https://github.com/flxbl-io/sfops/commit/75c13eba61b0f8865f8cc955f1ce1dcf2d6a8bd2))
* incorrect id name used ([c7fe44a](https://github.com/flxbl-io/sfops/commit/c7fe44a919fd73fb12017a6752b0bc77b50a1dc7))
* incorrect if syntax ([35c1ea7](https://github.com/flxbl-io/sfops/commit/35c1ea7c6f40c4ac28625b8624f3f8905a6842fb))
* incorrect path to domainCreator ([135587e](https://github.com/flxbl-io/sfops/commit/135587e6cc77274ef36272b184bc0a212e16e15e))
* incorrect pool name while release ([cf31ef9](https://github.com/flxbl-io/sfops/commit/cf31ef995c723ac1c7e7c8f2311343609f0b46f4))
* incorrect replacements ([8ed256f](https://github.com/flxbl-io/sfops/commit/8ed256f9bed69ffeb8ef4217f5a80def6ab17620))
* incorrect status header ([cdc3266](https://github.com/flxbl-io/sfops/commit/cdc32662e9de7c91ccdcd757ac4e5e05e51dc745))
* incorrect use of always ([5a62df2](https://github.com/flxbl-io/sfops/commit/5a62df24f71d69a097ff25e72b2c20c0711f0ae8))
* incorrect use of name and id ([b3e818f](https://github.com/flxbl-io/sfops/commit/b3e818f48db35d40e313a133ac991f0e62403560))
* incorrect use of variable expansion ([cd1ebff](https://github.com/flxbl-io/sfops/commit/cd1ebff94ace8539552a77d9f05f85d3bcd200ba))
* incorrect use of variables ([1623b11](https://github.com/flxbl-io/sfops/commit/1623b11ac5004aab74e15afea4bdc73a98ca1f7a))
* incorrect use of vars and name ([f4af349](https://github.com/flxbl-io/sfops/commit/f4af3491ea0f4f66e8b3807f5fb511bdf61e8cf8))
* incorrect variable assignment ([07f91f1](https://github.com/flxbl-io/sfops/commit/07f91f1091a04f81174ce64e81a35f15daf07434))
* incorrect variable usage ([b18ec5d](https://github.com/flxbl-io/sfops/commit/b18ec5debb5e89a1ecbdea5bb2e73b52a7792e51))
* incorrect variables used ([9afbdfb](https://github.com/flxbl-io/sfops/commit/9afbdfbf47d9c9e96748b65ba285df8ad4e6dcb4))
* lint errors ([2e259ec](https://github.com/flxbl-io/sfops/commit/2e259ec5d63e670a81620253fc8a759688aae01c))
* logs in delete Sandbox ([c6835b3](https://github.com/flxbl-io/sfops/commit/c6835b3d3529d6ca7536927bc89456fa3f8f7258))
* make branch to upperCase ([c4d0bb1](https://github.com/flxbl-io/sfops/commit/c4d0bb18651eba5eb978f5fe24c9e614bf999cbe))
* minor defects with workflows ([a6a2459](https://github.com/flxbl-io/sfops/commit/a6a24594415fefe68d39fe31266effbcd4778dab))
* missing dependency with type checks ([fbf62f8](https://github.com/flxbl-io/sfops/commit/fbf62f896d4772df044b5d43f030b992bf24c751))
* move creation of status check to new job ([3927989](https://github.com/flxbl-io/sfops/commit/3927989dc2be323d4ef57b3746425be65d972aaf))
* move fetch to node script ([1f49600](https://github.com/flxbl-io/sfops/commit/1f4960049647c2c513393c2c0c84960cdb3f4fca))
* move to async for dev creation ([227e353](https://github.com/flxbl-io/sfops/commit/227e35359e232af9bc4531cae1960849fb32b13c))
* move to async for sandbox ([637b840](https://github.com/flxbl-io/sfops/commit/637b840ddc4a94fae98bfc087a1bce5c044c1886))
* move to customer.repo_owner variable ([a1c38bc](https://github.com/flxbl-io/sfops/commit/a1c38bc34cbd3747b783ca0beaabdc21e0728c79))
* move to dashboard-repo ([d15b82c](https://github.com/flxbl-io/sfops/commit/d15b82cf12743665603acdd8067f5f570aa321d6))
* move to issue number ([9fb76a7](https://github.com/flxbl-io/sfops/commit/9fb76a7f5177686544df0b2894f00d9e19daf33d))
* move to mschick ([eacaf1d](https://github.com/flxbl-io/sfops/commit/eacaf1dc8536a90de44dddf6fd817342c9f95a60))
* move to recommended way of installing actionlint ([fd97e42](https://github.com/flxbl-io/sfops/commit/fd97e42aea7dc440f72c097f7390ee46ee9e1da6))
* move to reusable workflow ([f41c345](https://github.com/flxbl-io/sfops/commit/f41c345eee1c7a893bb2f1aafd3fd27a3ffa430d))
* move to use workitem for consistency ([860149c](https://github.com/flxbl-io/sfops/commit/860149cb2988a770c26303948e68fdbee16587be))
* move upstream changes ([91a6e2d](https://github.com/flxbl-io/sfops/commit/91a6e2d187e880fa8268cde6e800d6b7a06cc1db))
* org dropdown for apex tests ([9b38d5b](https://github.com/flxbl-io/sfops/commit/9b38d5ba6d96707ceeb0d2d12ca50e872b4b1399))
* **paginate:** ensure api is paginated ([cef2485](https://github.com/flxbl-io/sfops/commit/cef248515336c73bdb1005da78f952759587d708))
* path to github metrics workflow ([f677efe](https://github.com/flxbl-io/sfops/commit/f677efe8f9a235efdb6858c5997b1ae8a6ae6f6e))
* pnpm lock ([38eea12](https://github.com/flxbl-io/sfops/commit/38eea1222809eeb2656637ce1a49618a5e41d89f))
* **pr-validate:** fix for validate comments not displaying properly ([2bcaec2](https://github.com/flxbl-io/sfops/commit/2bcaec25e1fe3acfb82e5a4b3046decc35b056c8))
* **pr-validate:** incorrect location for if condtion ([2b32375](https://github.com/flxbl-io/sfops/commit/2b32375dc58235384321df2182ceae608af0bdf7))
* process in batches ([97d1f4a](https://github.com/flxbl-io/sfops/commit/97d1f4a136200d0b5c0c7c826d38118ca3e7faeb))
* **project:** fix typo with job ([927aba8](https://github.com/flxbl-io/sfops/commit/927aba88aa5c896c5ffad5cd47aac52f04ba852b))
* push branch status irrespective of build status ([203207c](https://github.com/flxbl-io/sfops/commit/203207c2fc0a1306b70f644734a7d944eb488a17))
* read usersToBeActivated from pool config ([ade7d3c](https://github.com/flxbl-io/sfops/commit/ade7d3c4e00a31812f1c46492bb21c35b78b055b))
* rearrange variable location ([7c7d798](https://github.com/flxbl-io/sfops/commit/7c7d798830c2c5bc98655dd5ee403723d830ca25))
* reduce max parallel to 1 ([b282a70](https://github.com/flxbl-io/sfops/commit/b282a705af89d102d66a4c96dcc1b1689ccdd3f9))
* refer correct token and url ([5decb72](https://github.com/flxbl-io/sfops/commit/5decb7208cfd9c5af78c1588afee981793937eb5))
* refresh github token ([e4649f9](https://github.com/flxbl-io/sfops/commit/e4649f9e1f097920708904abbccae531d92ecbd7))
* reintroduce existing workflow back ([7277533](https://github.com/flxbl-io/sfops/commit/7277533c588fdedbef9d1876efde52e6929876c9))
* release ci sandbox correctly ([abec41b](https://github.com/flxbl-io/sfops/commit/abec41b2aabe75302351c0ca88c867dde4321dc6))
* reload frames every 30 seconds ([e8152aa](https://github.com/flxbl-io/sfops/commit/e8152aaa4760adb0f2a5fb3aa1551c041c7f1835))
* remove branch on test runs ([02aa402](https://github.com/flxbl-io/sfops/commit/02aa4027e69d60a58f80337abd0290e5e1098d56))
* remove comments ([a6c03a8](https://github.com/flxbl-io/sfops/commit/a6c03a89b1980d19ccd7d409627f0057c2d16f6f))
* remove default plugins ([f5f40b8](https://github.com/flxbl-io/sfops/commit/f5f40b8126727f484e999d34c2b334758dc10d46))
* remove dependency on docker ([0441ba8](https://github.com/flxbl-io/sfops/commit/0441ba8205f2c4bd99c0990c1b51418c7ccc92a9))
* remove duplicated main ([a591d9c](https://github.com/flxbl-io/sfops/commit/a591d9c915a4e5deae84a53d365986f3d1577679))
* remove environment build docker ([3718e22](https://github.com/flxbl-io/sfops/commit/3718e221fffe02889fc9a5f3cfee708e1987ee83))
* remove fetch --all ([cd3cb07](https://github.com/flxbl-io/sfops/commit/cd3cb073e9c5400cfd0a0ea6e36c26d839864e54))
* remove incorrect conditions on error message ([87787b1](https://github.com/flxbl-io/sfops/commit/87787b143e01d8982d5bccc3ac6769d567da5858))
* remove incorrect slash ([d70d419](https://github.com/flxbl-io/sfops/commit/d70d4190ad9596131c53faccb800f4acc615d938))
* remove incorrect syntax ([b162318](https://github.com/flxbl-io/sfops/commit/b16231836f99947621c03823f128759ec4c6d882))
* remove invalid secrets ([dd8399b](https://github.com/flxbl-io/sfops/commit/dd8399b848cfa96e46f6c559001032f37e08f7f1))
* remove lib and add to .gitignore ([16bf9b6](https://github.com/flxbl-io/sfops/commit/16bf9b6f7745d9e786191670c0bf2c2011cb7502))
* remove lock ([4ef0e89](https://github.com/flxbl-io/sfops/commit/4ef0e8999dc50658e6a7ee57dbf226800bf917e4))
* remove output from job ([5dd5f9e](https://github.com/flxbl-io/sfops/commit/5dd5f9e7a2b1fbcc9c4db6ea54ef074b2d9796fa))
* remove requirement of branch ([772b3ba](https://github.com/flxbl-io/sfops/commit/772b3ba5855c2563646bb49ebd7a330d62541c5f))
* remove setting up origin ([1d1615f](https://github.com/flxbl-io/sfops/commit/1d1615fdc5c3845dbee58463645e14d1cdca63b9))
* remove unused actions ([223d778](https://github.com/flxbl-io/sfops/commit/223d7783feef9ad682281411b21684d91833850d))
* remove unused cp ([92cc8a3](https://github.com/flxbl-io/sfops/commit/92cc8a32f00655b1cb2978c306d7b52161ef4b6a))
* removed incorrect path to modules ([561276c](https://github.com/flxbl-io/sfops/commit/561276c2c37672fbc415e5d88ef9ca35a267365d))
* rename and hook workflows ([1304a47](https://github.com/flxbl-io/sfops/commit/1304a47c315b2ab416a935a5d8f416efe225a964))
* rename scripts ([2efe97d](https://github.com/flxbl-io/sfops/commit/2efe97dd631c3d4284b23b8df6ec40443e7d316f))
* reporing metcis string ([6d2c8ca](https://github.com/flxbl-io/sfops/commit/6d2c8cab87e21c59e442bf6cba12a54c985e9902))
* report branch status with head ref ([97b27aa](https://github.com/flxbl-io/sfops/commit/97b27aa5f3c8504a4eb938bb4fdfb799d01057ba))
* reusable workflo on build publish ([4de8592](https://github.com/flxbl-io/sfops/commit/4de85929657a66b38915412973c96c291b66940b))
* **reusable-worfklows:** skip if branch is release- ([bd9ae87](https://github.com/flxbl-io/sfops/commit/bd9ae871111ff8fd01b0d224a4767487b5fe5d96))
* **reusable-workflows,dashboard:** update to create branch info into dasbhoard ([dd199b1](https://github.com/flxbl-io/sfops/commit/dd199b154ddc399dd8b8082d3f491dccf50e9726))
* **reusable-workflows,project-workflows:** change branch configuraiton for release branch ([ac5426a](https://github.com/flxbl-io/sfops/commit/ac5426a913b1df3baeea2f1e56ebb487e7ad2dbe))
* **reusable-workflows:** add a comment if a branch already exists ([da313a0](https://github.com/flxbl-io/sfops/commit/da313a0db1f942eaf0d12de0599db3fb88642484))
* **reusable-workflows:** add an additional deletion of vars ([34175f8](https://github.com/flxbl-io/sfops/commit/34175f871bad283d4efd46fac44a11e2cb69350a))
* **reusable-workflows:** enure tokens are not getting expired when long running process are invoked ([7b44f90](https://github.com/flxbl-io/sfops/commit/7b44f904bb8683ee55afd700e92857aa0b82b5ab))
* **reusable-workflows:** fix  incorrect auth for other branches ([16bcb2e](https://github.com/flxbl-io/sfops/commit/16bcb2e8fac33f648154da4f7fb3e216f97e3830))
* **reusable-workflows:** fix branch name used across for release ([3a5a71a](https://github.com/flxbl-io/sfops/commit/3a5a71a0500179679a6504151440b6fd309fcc7b))
* **reusable-workflows:** fix incorrect branch variable ([3608fd9](https://github.com/flxbl-io/sfops/commit/3608fd93c25578862a8c7d63a7c427e76bcbe72d))
* **reusable-workflows:** fix issue title ([4979e28](https://github.com/flxbl-io/sfops/commit/4979e2822d8a0f4385ebb0ceab721992a5deea35))
* **reusable-workflows:** fix missing type ([829555e](https://github.com/flxbl-io/sfops/commit/829555ee87f849e6fb8b9290d3c21cfbe2f513da))
* **reusable-workflows:** fix to use NPM token ([c2c0fc9](https://github.com/flxbl-io/sfops/commit/c2c0fc9ad5e2a52636e39cf0ca8cf7129cbaaf86))
* **reusable-workflows:** fix typo with branch-deploy ([38b56d1](https://github.com/flxbl-io/sfops/commit/38b56d19cc966c810b724b28016ee8e341cfddd6))
* **reusable-workflows:** update patch workflow with changes in branch structure ([57530a6](https://github.com/flxbl-io/sfops/commit/57530a623508f7457f4220fdddc9f69a8b610fa8))
* **reusable-workflows:** validate when the base branch is release ([59eb5d3](https://github.com/flxbl-io/sfops/commit/59eb5d3ab16bfc2fe558d6c4e3363feb4db0388a))
* **reusable:** fix comments on dry run ([fee788b](https://github.com/flxbl-io/sfops/commit/fee788b4f25073521aba987f1ede206fc5e5e691))
* **reusable:** fix typo on syntax error with pool allocator ([8b2977b](https://github.com/flxbl-io/sfops/commit/8b2977bf398a82bb534e12497260db7d2da1efe9))
* **reusable:** fix typo with secrets ([7ca6d92](https://github.com/flxbl-io/sfops/commit/7ca6d92f3d2c64810ba93b720164a5988b3ecd15))
* **reusable:** incorrect action on package installer ([3c7edca](https://github.com/flxbl-io/sfops/commit/3c7edca27c400b7aea574f63a18e188372647aa9))
* **review:** add better colours and updated cards ([ba41d15](https://github.com/flxbl-io/sfops/commit/ba41d15e3c652991110455c5e262b3f0777b5e21))
* **review:** add missing sandbox checks css ([199a449](https://github.com/flxbl-io/sfops/commit/199a4495560bc05ce05f7b67bf7b9d08f46886df))
* **review:** discount in progress sandbox ([b50e3a5](https://github.com/flxbl-io/sfops/commit/b50e3a5a38234a299c302646c30ffe4bcbd62cd6))
* **review:** Ensure number is correct ([4fe35f8](https://github.com/flxbl-io/sfops/commit/4fe35f827a23f8911399eebdc447d1845df32fca))
* **review:** move semantic to unassign ([2d89227](https://github.com/flxbl-io/sfops/commit/2d89227f6776f4e1d041c5476837f39b732bf6bd))
* sandbox match regex ([056d40e](https://github.com/flxbl-io/sfops/commit/056d40e5a490b3e39949bf2f3b33c0802aebcce1))
* **sandboxStatus:** add creation date ([95022ac](https://github.com/flxbl-io/sfops/commit/95022aca528b67d97ec3af4e0a3362f8f1134367))
* setup branch-ref ([09b2112](https://github.com/flxbl-io/sfops/commit/09b211213f4156ac626807ffaaddf6e7508aeb81))
* setup correct inputs ([2d6a712](https://github.com/flxbl-io/sfops/commit/2d6a7124a08fc6368c0eaaeb972042ca77c4033b))
* support for branches ([45f4cdc](https://github.com/flxbl-io/sfops/commit/45f4cdc45cc9574e5447cea2d91e515f45de47eb))
* switch trigger during forcetest ([6ad66a0](https://github.com/flxbl-io/sfops/commit/6ad66a00f0c0538533c89b7e6ca4cce763062f34))
* temporarily comment out actionlint ([b4a99ab](https://github.com/flxbl-io/sfops/commit/b4a99ab36e0f709ec5c7cb5a5f4778ca4c649f1c))
* **testrun:** push test run into testorgs ([09c3bf6](https://github.com/flxbl-io/sfops/commit/09c3bf6659c0c2d948e223583d85e231636b3e7b))
* **tests:** add a build state ([223e072](https://github.com/flxbl-io/sfops/commit/223e072283529777cb3bf2c6f29b4cd57040de5d))
* udpated dependencies ([bee4e51](https://github.com/flxbl-io/sfops/commit/bee4e51a866806b5b10c17af5d850cb002da4503))
* update async handling of dev sandbox ([bc0577a](https://github.com/flxbl-io/sfops/commit/bc0577aad52b759764ecce4ad18a76e294b3fad3))
* update deployment failure ([e0456a3](https://github.com/flxbl-io/sfops/commit/e0456a309c5e590895487f2beced3f1ee0bf9081))
* update how branches are written ([1977d64](https://github.com/flxbl-io/sfops/commit/1977d6435e702d204a510d6c86cf6c8bf8c9d0e6))
* update incorrect EoF ([5cd7a9f](https://github.com/flxbl-io/sfops/commit/5cd7a9f360d0caded508459f97b45b073b35512c))
* update incorrect node call ([f5ac6a8](https://github.com/flxbl-io/sfops/commit/f5ac6a8faf4a1810c80d488cce0269390e57a567))
* update inUse and InProgress more accurately ([26e8f1a](https://github.com/flxbl-io/sfops/commit/26e8f1ab9c2d9820da80fb80db2eb7e7bf8f01a4))
* update lock description ([cd02002](https://github.com/flxbl-io/sfops/commit/cd02002b56008f16d04f017ed4ba90829593dfe7))
* update script location ([97be0cd](https://github.com/flxbl-io/sfops/commit/97be0cd322cc67696204b7c7a18c4747b585d6ef))
* update status to denote what if failed ([33d57bd](https://github.com/flxbl-io/sfops/commit/33d57bda909a9ee0c01b450436395ac96119a1a6))
* update to pool tag ([022701b](https://github.com/flxbl-io/sfops/commit/022701b230d072f31322dd91360a2746823ddca4))
* update to sandboxname ([2e858b5](https://github.com/flxbl-io/sfops/commit/2e858b5237177dd6643b471e180cb04ac904c8bc))
* update with dependencies ([bdadbe1](https://github.com/flxbl-io/sfops/commit/bdadbe129cd6278b182a529e70c9f3d63783c512))
* updated cancelled ([fb1609a](https://github.com/flxbl-io/sfops/commit/fb1609a7ae2671ccdabc3615899d173b6fcb325b))
* updates to expiry sandbox ([06d4728](https://github.com/flxbl-io/sfops/commit/06d472879d02f51b13c4f2d35077d41d71bf188e))
* use always to pr-validate ([9484a08](https://github.com/flxbl-io/sfops/commit/9484a088c9d901934eea8f27357ef554fc24083b))
* use branch while fetching ([9b08654](https://github.com/flxbl-io/sfops/commit/9b0865459204503f24029e755e244b60829b4ff3))
* use conditional to use same job ([56ec70c](https://github.com/flxbl-io/sfops/commit/56ec70c42d71f06c3257c3a4a1c2e67489dadaac))
* use correct env vars ([fa8293e](https://github.com/flxbl-io/sfops/commit/fa8293e9443e195a2653e87b1333c102b189935c))
* use correct token var ([f2ee7e9](https://github.com/flxbl-io/sfops/commit/f2ee7e965ea645a2a182d4a821d5b9cb78aa7888))
* use NPM token temporarily ([809e443](https://github.com/flxbl-io/sfops/commit/809e443ef507963d38ce0d7fe4bace8cbd65bdab))
* use of correct description filter ([588ead1](https://github.com/flxbl-io/sfops/commit/588ead1dc7a64f1026a3eba8c299e70c888619c7))
* use of correct var in gh token ([60c9202](https://github.com/flxbl-io/sfops/commit/60c9202d37ef171c6fc3c0de61df10329da11425))
* use PR api to fetch details ([958e8ef](https://github.com/flxbl-io/sfops/commit/958e8ef903dba13b55aa4d245b0785982c593c24))
* use pr user login ([c347c5c](https://github.com/flxbl-io/sfops/commit/c347c5c6cf6d0369326713fe703c3563f10fdb5d))
* use refreshed token in always ([19691c8](https://github.com/flxbl-io/sfops/commit/19691c892aebed7a9595957e3e6e3474b3260584))
* use sf instead of sfdx ([451b2dd](https://github.com/flxbl-io/sfops/commit/451b2ddf3a9b9c23b455b8ec2cf9d7a82f9f2f0c))
* use updated findReleaseDefn ([f25a851](https://github.com/flxbl-io/sfops/commit/f25a8517649ac59112bbfb4de06c5977e3d2c375))
* validate need app token ([585ea15](https://github.com/flxbl-io/sfops/commit/585ea155d91afe18d5195f18c9fe87d4cd0bdfbc))
* variable name incorrect expansion ([744a9b2](https://github.com/flxbl-io/sfops/commit/744a9b27c4e371e66b65872190922b89b9b5f0a5))
* variable semantics on jira ([3815231](https://github.com/flxbl-io/sfops/commit/3815231ebfd6634d84c242e643120cf1655dc08b))
* workflow name ([8e946d4](https://github.com/flxbl-io/sfops/commit/8e946d40a6885916721d61b70e091bce78d1bee9))
* **workflow:** fix incorrect syntax ([6b97a28](https://github.com/flxbl-io/sfops/commit/6b97a289bd80907c117d01cdd3b796016fad9548))
* **workflows:** add an explict token ([0620a23](https://github.com/flxbl-io/sfops/commit/0620a234a629f58462ddedc94cc4c82deafefde9))
* **workflows:** add release- to triggers ([f1e022a](https://github.com/flxbl-io/sfops/commit/f1e022aaffaf5fe7b320e348aaf1d6a171615b86))
* **workflows:** fix typo with dashboard repo var ([e72b49f](https://github.com/flxbl-io/sfops/commit/e72b49f641c83ca4bd1bbfd6ffa0eaab72d141ef))

## Changelog
