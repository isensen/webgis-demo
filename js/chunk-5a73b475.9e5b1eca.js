(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a73b475"],{"64a9":function(e,n,a){"use strict";a("ebc4")},b1eb:function(e,n,a){"use strict";a.r(n);var t=a("7a23"),r={id:"cesiumContainer"};function o(e,n,a,o,i,c){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",r)}a("e877");var i=a("ec35"),c={mounted:function(){this.init()},methods:{init:function(){var e=new i["W"]("cesiumContainer");i["u"].supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var n=e.scene;function a(e){for(var n=[],a=0;a<360;a++){var t=i["G"].toRadians(a);n.push(new i["g"](e*Math.cos(t),e*Math.sin(t)))}return n}var t=new i["N"]({polylinePositions:i["h"].fromDegreesArray([-85,32,-85,36,-89,36]),vertexFormat:i["U"].POSITION_NORMAL_AND_ST,shapePositions:a(6e3),cornerType:i["o"].MITERED}),r=n.primitives.add(new i["O"]({geometryInstances:new i["z"]({geometry:t}),appearance:new i["F"]({material:new i["E"]({fabric:{uniforms:{color:new i["l"](1,0,0,1),percentage:.1,offset:0},source:"\n                  uniform vec4 color;\n                  uniform float percentage;\n                  uniform float offset;\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                      czm_material material = czm_getDefaultMaterial(materialInput);\n                      vec2 st = materialInput.st;\n                      material.diffuse = color.rgb;\n                      material.alpha = 1.0-mod(st.s+offset,percentage)*(1.0/percentage);\n                      return material;\n                  }"}})})}));e.camera.flyToBoundingSphere(i["N"].createGeometry(t).boundingSphere),e.scene.preUpdate.addEventListener((function(){var e=r.appearance.material.uniforms.offset;e+=.001,e>1&&(e=0),r.appearance.material.uniforms.offset=e}))}}},s=(a("64a9"),a("6b0d")),m=a.n(s);const u=m()(c,[["render",o],["__scopeId","data-v-89ece02e"]]);n["default"]=u},ebc4:function(e,n,a){}}]);