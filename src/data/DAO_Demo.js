const project = {
  name: "Token_Locking",
  type: "folder",
  theme: 'dark',
  dataItems: {
    sourcedata: {
      items: [
        {
          id: 0,
          name: "DAO_Demo.gcscript",
          type: "json",
          data: `
            {
                "type": "script",
                "title": "DAO Demo",
                "description": "This script will create a workspace to import addresses, scripts, manage funds and signatures from a DAO where you are a powerful member, you have full control when you use 2 of your keys.",
                "exportAs": "DAODemo",
                "return": {
                  "mode": "none"
                },
                "run": {
                  "otherMemberKeyHashes": {
                    "type": "data",
                    "value": {
                      "IOHK": "3ecb73dee12d39d8787c9b87e71e857c6dd487d4fe7c5173e0bb8c74",
                      "Emurgo": "1d46f358ba291245db79a6b953703a131e688ab2054e6a85b742d621",
                      "CardanoFoundation": "ad0a0ecf8ae61aba9b75d337b7348a4ad5d1a92aad9d8aeaf04b28d2"
                    }
                  },
                  "walletSetup": {
                    "type": "loadConfig",
                    "updateId": "DAODemo",
                    "layers": [
                      {
                        "type": "Workspace",
                        "items": [
                          {
                            "namePattern": "gcdao",
                            "titlePattern": "GhostChain DAO",
                            "descriptionPattern": "Wallet settings generated by a demo script to create a DAO."
                          }
                        ]
                      },
                      {
                        "type": "Key",
                        "workspaceIds": [
                          "gcdao"
                        ],
                        "items": [
                          {
                            "namePattern": "spend-sponsor",
                            "kind": "spend",
                            "accountIndex": 0,
                            "addressIndex": 0
                          },
                          {
                            "namePattern": "stake-sponsor",
                            "kind": "stake",
                            "accountIndex": 0,
                            "addressIndex": 0
                          },
                          {
                            "namePattern": "Casper",
                            "kind": "spend",
                            "accountIndex": 0,
                            "addressIndex": 1
                          },
                          {
                            "namePattern": "Slimer",
                            "kind": "spend",
                            "accountIndex": 0,
                            "addressIndex": 2
                          },
                          {
                            "namePattern": "MoaningMyrtle",
                            "kind": "spend",
                            "accountIndex": 0,
                            "addressIndex": 3
                          }
                        ]
                      },
                      {
                        "type": "NativeScript",
                        "workspaceIds": [
                          "gcdao"
                        ],
                        "namePattern": "gcdao_script",
                        "items": [
                          {
                            "atLeast": 2,
                            "ofThese": [
                              {
                                "pubKeyHashHex": "{get('cache.otherMemberKeyHashes.IOHK')}"
                              },
                              {
                                "pubKeyHashHex": "{get('cache.otherMemberKeyHashes.Emurgo')}"
                              },
                              {
                                "pubKeyHashHex": "{get('cache.otherMemberKeyHashes.CardanoFoundation')}"
                              },
                              {
                                "pubKeyName": "Casper"
                              },
                              {
                                "pubKeyName": "Slimer"
                              },
                              {
                                "pubKeyName": "MoaningMyrtle"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "Address",
                        "workspaceIds": [
                          "gcdao"
                        ],
                        "items": [
                          {
                            "namePattern": "Signer",
                            "spendPubKeyName": "spend-sponsor",
                            "stakePubKeyName": "stake-sponsor"
                          },
                          {
                            "namePattern": "SharedTreasury",
                            "spendNativeScriptName": "gcdao_script",
                            "stakeNativeScriptName": "gcdao_script"
                          }
                        ]
                      }
                    ]
                  }
                }
              }

`
        }
      ]
    },
    returndata: {
      items: [
        {
          id: 0,
          name: "data.json",
          type: "json",
          data: `
{
    "exports": {
        "Lock_Demo": {
        "lockUTXO": 0,
        "lock": [
            {
            "policyId": "ada",
            "assetName": "ada",
            "quantity": "5000000"
            }
        ],
        "smartContract": "56550100002225333573466e1cdd68011bad0031498581",
        "smartContractHash": "c203151a6a8a55baef2e3d302690858a42c55ebdb7d140eade17a530",
        "smartContractAddress": "addr_test1zrpqx9g6d299twh09c7nqf5ssk9y9327hkmazs82mct62v9dqwj2u3djrag0mene2cm9elu5mdqmcz9zc2rzgq7c5g6q5xcn4r",
        "lockTx": "b9cb604d1cead1afdd6c9403cae411234b19efc7cc78c1c060af69746fd223c2"
        }
    }
}
`
        }
      ]
    }
  }
};

export default project;

