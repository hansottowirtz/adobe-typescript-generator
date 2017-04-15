/// <reference path="../../namespaces/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/**
		 *  Support for enumeration values, which is not native to 
		 * ActionScript.  Maintains a cache of enums for a given class- 
		 * say, for instance, all SaveOptions enumerated values would 
		 * be maintained in a single instance of this type. 
		 */
		class CSEnumSharedCache {
			/** Getter for the class object on the host */
			public readonly hostClassObject: HostObject;
			/** constructor */
			public constructor();
			/**
			 * Return enumeration Object for passed value
			 * @param {number} inboundValue
			 * @param {string} inboundName
			 */
			public getEnumObject(inboundValue: number, inboundName: string): any;
		}
	}
}