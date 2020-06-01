/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {
 // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Paluffel"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1485632342415377360",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'spine-middle'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0, z: 0},
                        scale: { x: 1, y: 1, z: 1},
                       
                    }}
                }
            });
		        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Paluffel"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1485632331669570507",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0, z: 0 },
                        scale: { x: 1, y: 1, z: 1},
                       
                    }}
                }
            });

            // Create cube.
            console.log(`User joined: ${user.name}`);
            console.log(user);
            if (user.name === "Paluffel"){
                const mirror =   Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 1314062242190197175",
			actor: {
                name: 'Mirror',
                grabbable: true,
                exclusiveToUser: user.id,
                attachment: {
                    userId: user.id,
                    attachPoint: 'hips'
                },
				transform: {local: {
					position: { x: 0, y: -0.3, z: 1 },
					scale: { x: 0.5, y: 0.5, z: 0.5}
				}}
			}
		});

		// Create button behavior for cube.
		mirror.setBehavior(ButtonBehavior).onButton("pressed", (user: User) => {
			if (!this.attachedItems[user.id]) {
      // If item for user does not exist, create it and add to list.
				this.attachedItems[user.id] = Actor.CreateFromLibrary(this.context, {
          resourceId: "artifact: 1485632309389427652",
          actor: {
              name: 'Retro',
              attachment: {
                  userId: user.id,
                  attachPoint: 'spine-middle'
              },
              transform: {local: {
                  position: { x: 0, y: 0, z: 0},
                  scale: { x: 1, y: 1, z: 1},
                 
              }}
          }
      });
        } else {
            // If item already exists, destroy it and delete from list.
            this.attachedItems[user.id].destroy();
            delete this.attachedItems[user.id];
        }
    });
                   // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Paluffel"){
            Actor.CreateFromLibrary(this.context, {
                    resourceId: "artifact: 1483495083096408066",
                    actor: {
                        name: 'bowtie',
                        attachment: {
                            userId: user.id,
                            attachPoint: 'neck'
                        },
                        transform: {local: {
                            position: { x: -0.02, y: -0.01, z: 0.13 },
                            scale: { x: 0.131844, y: 0.131844, z: 0.131844},
                           
                        }}
                    }
                });
            }
        }
        }
    }
}
}
