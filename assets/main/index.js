System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,i,n,l,s,r,c,a,p,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){l=e.cclegacy,s=e._decorator,r=e.SpriteFrame,c=e.Collider2D,a=e.Contact2DType,p=e.Sprite,h=e.Component}],execute:function(){var u,v,d,g,f;l._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var m=s.ccclass,C=s.property;e("Bird",(u=m("Bird"),v=C({type:[r]}),u((f=t((g=function(e){function t(){for(var t,o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return t=e.call.apply(e,[this].concat(l))||this,i(t,"sprites",f,n(t)),t.listToRemove=[],t.level=0,t}o(t,e);var l=t.prototype;return l.start=function(){var e=this.getComponent(c);e&&(e.on(a.BEGIN_CONTACT,this.onBeginContact,this),e.on(a.END_CONTACT,this.onEndContact,this))},l.onBeginContact=function(e,o,i){e.group==o.group&&e.node.getComponent(t).level==o.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(o.node))},l.onEndContact=function(e,t,o){console.log("onEndContact")},l.levelUp=function(){if(this.level!=this.sprites.length-1){this.level++;var e=this.getComponent(p);e&&this.sprites[this.level]?(e.spriteFrame=this.sprites[this.level],this.node.scale.multiplyScalar(1+.3*this.level),console.log("Visual change successful to level: "+this.level)):console.error("Failed to change sprite! Level:",this.level,"Array length:",this.sprites.length),console.log("level: "+this.level)}},l.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].destroy(),console.log("bird removed");this.listToRemove=[]},t}(h)).prototype,"sprites",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=g))||d));l._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r,i,a,c,l,s,p,u,y,d,f,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,s=t.Input,p=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,d=t.tween,f=t.Vec3,h=t.Component}],execute:function(){var v,b,m,P,g;i._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var R=a.ccclass,T=a.property;t("GameController",(v=R("GameController"),b=T({type:c}),v((g=e((P=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",g,r(e)),e}o(e,t);var i=e.prototype;return i.start=function(){l.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=p(this.birdPrefab),o=t.getUILocation();e.setParent(this.node),e.setWorldPosition(o.x,o.y,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},i.moveToX=function(t,e,o){void 0===o&&(o=.5);var n=t.worldPosition.clone();d(t).to(o,{worldPosition:new f(e,n.y,n.z)}).start()},i.update=function(t){},e}(h)).prototype,"birdPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});