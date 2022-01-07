"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[518],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30146:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={sidebar_position:1},l="Reconciliation",d={unversionedId:"BestPractices/Reconciliation",id:"BestPractices/Reconciliation",isDocsHomePage:!1,title:"Reconciliation",description:"The Data Model",source:"@site/docs/BestPractices/Reconciliation.md",sourceDirName:"BestPractices",slug:"/BestPractices/Reconciliation",permalink:"/matter/docs/BestPractices/Reconciliation",editUrl:"https://github.com/evaera/matter/edit/main/docs/BestPractices/Reconciliation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Why ECS",permalink:"/matter/docs/WhyECS"},next:{title:"Using CollectionService tags",permalink:"/matter/docs/BestPractices/CollectionService"}},c=[{value:"The Data Model",id:"the-data-model",children:[],level:2},{value:"Reconciliation",id:"reconciliation-1",children:[],level:2},{value:"Reverse bindings",id:"reverse-bindings",children:[{value:"Events",id:"events",children:[],level:3},{value:"Removal",id:"removal",children:[],level:3}],level:2},{value:"Two-way bindings",id:"two-way-bindings",children:[],level:2},{value:"Benefits of reconciliation",id:"benefits-of-reconciliation",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reconciliation"},"Reconciliation"),(0,i.kt)("h2",{id:"the-data-model"},"The Data Model"),(0,i.kt)("p",null,"In Roblox, the Data Model is the tree of instances which embodies all the things in your game. In Lua, the ",(0,i.kt)("inlineCode",{parentName:"p"},"game")," global is assigned to the root of this tree, whose class is ",(0,i.kt)("inlineCode",{parentName:"p"},"DataModel"),". The Data Model is also sometimes called the DOM (Document Object Model), a term borrowed from the Web world."),(0,i.kt)("p",null,"When making a game on Roblox, whether a conscious decision or not, the source of truth for game state lives in either in some Lua data structure (e.g., a table), or in the Data Model itself."),(0,i.kt)("p",null,"As an example, the Humanoid object has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," field. Most games on Roblox use the Humanoid's ",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," field as the source of truth for players. Thus, the source of truth for player health lives in the Data Model."),(0,i.kt)("p",null,"On the other hand, imagine in your game players can earn points bay completing objectives. You create a table which maps players to the number of points they have (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"{[Player]: number}"),"). To display the points to the player, you update some text in the game every time the points change. This is an example of the source of truth living in your own code: the ",(0,i.kt)("inlineCode",{parentName:"p"},"points")," map is the source of truth, and you update the DataModel to reflect this."),(0,i.kt)("p",null,"Many games use a mix of these two ideas for different pieces of state. While this ",(0,i.kt)("em",{parentName:"p"},"can")," work, it can lead to problems down the line. Largely, these problems are caused by the instances and properties available in the DataModel being unable to adequately represent complex game state in a convenient way. Developers are forced to contort their game state around what's available in the DataModel, which makes code difficult to reason about. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.roblox.com/en-us/articles/instance-attributes"},"Attributes")," are an attempt to help solve this problem, but ultimately fall short due to design limitations. You cannot create an attribute with a complex data structure, only primitive values are allowed. And, attributes must be placed on existing instance types, which hamstrings the developer's ability to have control over the state of their own game."),(0,i.kt)("p",null,"Code becomes simpler to reason about if we instead treat Instances and the Data Model as a sort of ",(0,i.kt)("em",{parentName:"p"},"intermediate representation")," of our game's state, which is only derived from our true game state: some data structure (e.g., tables) that we keep in Lua."),(0,i.kt)("p",null,"This is what the ECS world is: it's a place where you can structure your game state however you want, optimized for fast batch operations. There are other approaches to storing game state (e.g. object-oriented classes and encapsulation), but this is an ECS library, so that's what we'll focus on."),(0,i.kt)("h2",{id:"reconciliation-1"},"Reconciliation"),(0,i.kt)("p",null,"Reconciliation, in this context, means taking state from one form and turning it into another. In our case, we want to reconcile our Lua state into Instances in the Data Model, so that users can see and interact with it. A key idea and benefit of reconciliation is that it's possible to reconcile the same state in multiple different ways. If we have enemies in our world at certain positions, we can reconcile them into the world with character models, but also onto a minimap with red blips. It's the same state being converted into two different ways to view the data."),(0,i.kt)("p",null,"When writing code in an ECS like Matter, it's ideal for all of our gameplay code to operate on the ECS world alone. In the Matter example game, for example, there are ships that fly to certain points in space. For example, instead of updating the ships in the Data Model directly, we store the current goal position in the Ship component. The Ship component knows nothing about the Data Model. It has no reference to the physical ship Instance in the Data Model, it only contains the state about the ship."),(0,i.kt)("p",null,"We can create another component (in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evaera/matter/tree/main/example"},"Matter example game"),", we call it ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),") that holds a reference to the ship Instance."),(0,i.kt)("p",null,"We can loop over all Ships that don't also have a Model, and create one for it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="ships.lua"',title:'"ships.lua"'},"for id, ship in world:query(Ship):without(Model) do\n    local model = prefabs.Ship:Clone() -- assuming prefabs is a place where you store pre-made models\n    model.Parent = workspace\n\n    world:insert(id, Model({\n        instance = model\n    }))\nend\n")),(0,i.kt)("p",null,"Now, whenever there's an entity with Ship without Model, we create the model and insert the Model component. We can then loop over all Ships that have Models, and update the position of the Model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="ships.lua"',title:'"ships.lua"'},"for id, ship, model in world:query(Ship, Model) do\n    model.instance.BodyPosition.Position = ship.goalPosition\nend\n")),(0,i.kt)("p",null,"Keep in mind, both of these loops are performed every frame - that's what a system does. This means that in order to create a Ship from some other system, we need only spawn an entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"Ship")," - this system we just wrote takes care of creating and further reconciling the state of the Ship into the Data Model."),(0,i.kt)("p",null,"We have a problem now, though: whenever an entity with both Ship and Model is despawned, the physical ship Instance in the Data Model will stick around. Since the Model component is generic and could be reused with any other component (it's not specific to just Ship), we can create another system that handles this case for anything that uses Model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="removeModels.lua"',title:'"removeModels.lua"'},"for _id, modelRecord in world:queryChanged(Model) do\n    if modelRecord.new == nil then\n        if modelRecord.old and modelRecord.old.instance then\n            modelRecord.old.instance:Destroy()\n        end\n    end\nend\n")),(0,i.kt)("p",null,"Here, we use ",(0,i.kt)("a",{parentName:"p",href:"/api/World#queryChanged"},(0,i.kt)("inlineCode",{parentName:"a"},"queryChanged"))," to loop over Model components that have changed in the last frame. ",(0,i.kt)("inlineCode",{parentName:"p"},"queryChanged")," gives us a ",(0,i.kt)("a",{parentName:"p",href:"/api/World#ChangeRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"ChangeRecord"))," type, which is a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"old")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," properties. If there was an ",(0,i.kt)("inlineCode",{parentName:"p"},"old")," instance, but no ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," instance, we know that the Model component has been removed. This can happen when the Model component is removed but the entity still exists (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"world:remove(entityId, Model)")," and also when the entire entity is despawned (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"world:despawn(entityId)"),"). We then call ",(0,i.kt)("inlineCode",{parentName:"p"},"Instance:Destroy()")," on the Instance."),(0,i.kt)("p",null,"Now that we've written this code once for our game, it will operate on any entity that has a Model component. This means that calling ",(0,i.kt)("inlineCode",{parentName:"p"},"world:despawn")," on an entity with Ship and Model will result in the physical Instance also being removed."),(0,i.kt)("h2",{id:"reverse-bindings"},"Reverse bindings"),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"While we generally want our state to flow in one direction (Lua into the DataModel), we must also be able to interact with the things we've created. Roblox Instances have events that fire, (e.g., Touched) which are still things we need to use."),(0,i.kt)("p",null,"As an example, let's say we wanted the Ship to despawn if it was touched by anything. We can use Matter's ",(0,i.kt)("a",{parentName:"p",href:"/api/Matter#useEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"useEvent"))," utility to collect events that fire in a frame and loop over them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="ships.lua"',title:'"ships.lua"'},'for id, model in world:query(Model, Ship) do\n    for _ in Matter.useEvent(model.Instance, "Touched") do\n        world:despawn(id)\n    end\nend\n')),(0,i.kt)("h3",{id:"removal"},"Removal"),(0,i.kt)("p",null,"Sometimes, instances can be removed from the Data Model or destroyed without us doing it. A common cause of this is because parts that are affected by physics fall below the world or get flung to infinity. This can result in those instances being removed without us doing so."),(0,i.kt)("p",null,"To account for this, we can simply loop over every Model and check if it's still in the world. If not, we can either remove the Model component or despawn the entire entity (whichever makes more sense for your game)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="removeModels.lua"',title:'"removeModels.lua"'},"for id, model in world:query(Model) do\n    if model.instance:IsDescendantOf(game) == false then\n        world:remove(id, Model)\n    end\nend\n")),(0,i.kt)("p",null,"As a side effect, the above code makes it so manually deleting an Instance in a play test in Studio will cause it to be instantly recreated in the same place. This may or may not be the behavior that you want, but it sure is interesting!"),(0,i.kt)("p",null,"It should be noted that this method can cause an infinite loop of a Model being created and destroyed if the last Transform was at an invalid position. This can be solved by either just despawning the entire entity instead, or taking care to reset Transform to a known-safe position when removing models."),(0,i.kt)("h2",{id:"two-way-bindings"},"Two-way bindings"),(0,i.kt)("p",null,"Imagine we had a component that held the position and rotation of something. This is often called ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform"),". Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform")," component would hold a CFrame value."),(0,i.kt)("p",null,"There are two potential ways we could want to use this component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We want to update our Transform component and have the physical Instance be moved to that place."),(0,i.kt)("li",{parentName:"ul"},"We want the Transform component to be updated based on where the Instance is in the world, because physics can move it around.")),(0,i.kt)("p",null,"We can make a system that handles both of these cases for us."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="updateTransforms.lua"',title:'"updateTransforms.lua"'},"-- Handle Transform added/changed to existing entity with Model\nfor _id, transformRecord, model in world:queryChanged(Transform, Model) do\n    -- Take care to ignore the changed event if it was us that triggered it\n    if transformRecord.new and not transformRecord.new.doNotReconcile then\n        model.instance:SetPrimaryPartCFrame(transformRecord.new.cframe)\n    end\nend\n\n-- Handle Model added/changed on existing entity with Transform\nfor _id, modelRecord, transform in world:queryChanged(Model, Transform) do\n    if modelRecord.new then\n        modelRecord.new.model:SetPrimaryPartCFrame(transform.cframe)\n    end\nend\n\n-- Update Transform on unanchored Models\nfor id, model in world:query(Model, Transform) do\n    if model.instance.PrimaryPart.Anchored then\n        continue\n    end\n\n    local existingCFrame = world:get(id, Components.Transform)\n    local currentCFrame = model.instance.PrimaryPart.CFrame\n\n    -- Only insert if actual position is different from the Transform component\n    if currentCFrame ~= existingCFrame then\n        world:insert(\n            id,\n            Components.Transform({\n                cframe = currentCFrame,\n                doNotReconcile = true,\n            })\n        )\n    end\nend\n")),(0,i.kt)("p",null,"The above system handles the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the Transform component is inserted on an entity that also has Model, move the Model to that position.*"),(0,i.kt)("li",{parentName:"ul"},"When the Model component is inserted on an entity that also has Transform, move the Model to that position."),(0,i.kt)("li",{parentName:"ul"},"When an unanchored Model moves, update the Transform component to match its new position.")),(0,i.kt)("p",null,"*"," We only update the Transform component if it wasn't us that caused it to move."),(0,i.kt)("h2",{id:"benefits-of-reconciliation"},"Benefits of reconciliation"),(0,i.kt)("p",null,"When we structure our game code in this manner, it allows us to do some cool things. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating a new entity (like a ship) from other systems is as simple as just spawning an entity with a Ship component. We don't have to worry about creating the model for it, because the ship system will look for Ships without Models and make them for us."),(0,i.kt)("li",{parentName:"ul"},"Likewise, despawning an entity does what we expect. We can just despawn it from any system, and our generic model system will handle cleaning up the model."),(0,i.kt)("li",{parentName:"ul"},"We don't need to access the Model component of a ship to know where it is in the world, we only need to read the Transform component, even if it's affected by physics. Likewise, to move a ship, we only need to write to (insert) the Transform component."),(0,i.kt)("li",{parentName:"ul"},"We could copy the entire ECS world at a given point in time, since it's just plain-old data",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", and then restore it later. Our systems won't know the difference: models that didn't exist and now do will be created, models that exist now but didn't before will be destroyed, and models that still exist will snap into the correct position."),(0,i.kt)("li",{parentName:"ul"},"We can reconcile the same state multiple times into the world, like marking ships on a minimap.")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"If saving the data, we would need to take special care to serialize things like CFrame values and Vector3 into JSON-compatible data, but that's beyond the scope of this article",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);