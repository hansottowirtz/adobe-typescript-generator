/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Each node-data value is a member of anInfoset object 
		 * associated with an ExtensionHandler object.The name becomes 
		 * a property of the parent Infoset object, which provides 
		 * access to a data value of this type.
		 */
		class InfosetMemberDescription extends Adobe.Csawlib.CSHostObject {
			/**
			 * The name of this value, which becomes a property of the 
			 * parent Infoset object.
			 */
			public name: string;
			/**
			 * The data type for values accessed through the name property 
			 * of the parent Infoset object.
			 */
			public type: string;
		}
	}
}