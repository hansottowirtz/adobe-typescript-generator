/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * This object associates a cache status with each IInfoset 
		 * object in a CacheElement object. The status determines 
		 * whether the data needs to be refreshed.Your ExtensionModel 
		 * object method for refreshInfoset() should update the cache 
		 * status for each data set it updates, including core data 
		 * sets.
		 */
		class CacheData extends Adobe.Csawlib.CSHostObject {
			/**
			 * Opaque storage to aid extensions in discovering the cache 
			 * status.
			 * @type {string}
			 */
			public cookie: string;
			/**
			 * The cache status for a member of the associated information 
			 * set, or of the set itself.
			 * @type {string}
			 */
			public status: string;
			/**
			 * @type {string}
			 */
			public storageHint: string;
		}
	}
}