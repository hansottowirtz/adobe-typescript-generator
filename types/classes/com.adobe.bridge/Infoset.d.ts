/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * For a script-defined node-handling extension, you can 
		 * register an Infoset object that defines a related set of 
		 * script-defined Thumbnail object properties for handled 
		 * nodes. Adobe Bridge-defined Infoset objects and their 
		 * members are listed in the Adobe Bridge JavaScript 
		 * Reference.To declare new properties, create the Infoset 
		 * object and associate it with your ExtensionHandler object 
		 * using  app.registerInfoset(). The Infoset object is added to 
		 * the list in ExtensionHandler.infosets.An Infoset is a named 
		 * set of data elements. Each member element has a name and 
		 * type, defined by a InfosetMemberDescription object. Each 
		 * member name becomes a property of the containing Infoset, 
		 * and you can access the data value, of the corresponding 
		 * type, through that property.
		 */
		class Infoset extends Adobe.Csawlib.CSHostObject {
			/** The CacheData object containing cache status for this set. */
			public cacheData: any;
			/** The descriptions of the members of this set. */
			public description: any[];
			/**
			 * The name of the ExtensionHandler object that manages this 
			 * data.
			 */
			public readonly extension: string;
			/** The name of this set. */
			public infosetName: string;
			/**
			 * Adds a child node to the core data set children.
			 * @param {string} path 
			 * @param {any} model 
			 * @param {string} containerHint 
			 */
			public addChild(path: string, model: any, containerHint: string): void;
			/**
			 * Sets all members of this set to the default value for the 
			 * data type.
			 */
			public initializeMembersToDefaultValues(): void;
		}
	}
}