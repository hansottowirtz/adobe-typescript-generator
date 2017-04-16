/// <reference path="../../packages/com.adobe.csawlib/references.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/**
		 * Support for enumeration values, which is not native to 
		 * ActionScript.  Maintains a cache of enums for a given class- 
		 * say, for instance, all SaveOptions enumerated values would 
		 * be maintained in a single instance of this type.
		 */
		class CSEnumSharedCache {
			/**
			 * Getter for the class object on the host
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public readonly hostClassObject: Adobe.Flex.HostObject;
			/**
			 * constructor
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Return enumeration Object for passed value
			 * @param {number} inboundValue
			 * @param {string} inboundName
			 * @returns {any}
			 */
			public getEnumObject(inboundValue: number, inboundName: string): any;
		}
	}
}