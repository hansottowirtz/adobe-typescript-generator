/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * This object associates a Thumbnail object with the 
		 * ExtensionModel object that handles the node and that defines 
		 * additional node data. The cache collects all currently 
		 * defined node data. This object actually contains the 
		 * ExtensionModel object that is created for the thumbnail, as 
		 * well as the associated Infoset objects. Each Infoset  object 
		 * in the cache is associated with a CacheData object object 
		 * that contains its cache status.When Adobe Bridge needs to 
		 * display a handled node, it instantiates this object. It 
		 * creates the ExtensionModel object using the handler’s 
		 * makeModel() method, and stores it in the CacheElement. It 
		 * then passes the CacheElement object to the node handler’s 
		 * model method registerInterest().Your implementation of the 
		 * registerInterest() method must store the cache object 
		 * (typically in the model object's privateData property) so 
		 * that the model’s refreshInfoset() method can use it to 
		 * update the data.
		 */
		class CacheElement extends Adobe.Csawlib.CSHostObject {
			/** Core data set. */
			public badges: Adobe.Bridge.Infoset;
			/** Core data set. */
			public cameraRaw: Adobe.Bridge.Infoset;
			/** Core data set. */
			public children: Adobe.Bridge.Infoset;
			/** Core data set. */
			public fullsize: Adobe.Bridge.Infoset;
			/** Core data set. */
			public icon: Adobe.Bridge.Infoset;
			/** Core data set. */
			public immediate: Adobe.Bridge.Infoset;
			/** Core data set. */
			public item: Adobe.Bridge.Infoset;
			/** Core data set. */
			public itemContent: Adobe.Bridge.Infoset;
			/** Core data set. */
			public linkTarget: Adobe.Bridge.Infoset;
			/** Core data set. */
			public metadata: Adobe.Bridge.Infoset;
			/** The path of the asset associated with this object. */
			public readonly path: string;
			/** Core data set. */
			public preview: Adobe.Bridge.Infoset;
			/** Core data set. */
			public quickMetadata: Adobe.Bridge.Infoset;
			/** Core data set. */
			public thumbnail: Adobe.Bridge.Infoset;
			/**
			 * Calls the authenticate() method defined in the 
			 * ExtensionHandler object associated with this element.
			 */
			public doAuthentication(): void;
		}
	}
}