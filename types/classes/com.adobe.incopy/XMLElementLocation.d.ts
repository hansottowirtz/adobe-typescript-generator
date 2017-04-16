/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLElementLocation extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Locates the element at the end of the containing object.
			 * @type {Adobe.Incopy.XMLElementLocation}
			 * @readonly
			 */
			public static readonly ELEMENT_END: Adobe.Incopy.XMLElementLocation;
			/**
			 * Locates the element at the beginning of the containing 
			 * object.
			 * @type {Adobe.Incopy.XMLElementLocation}
			 * @readonly
			 */
			public static readonly ELEMENT_START: Adobe.Incopy.XMLElementLocation;
			/**
			 * Alias for ELEMENT_END. Locates the element at the end of the 
			 * containing object.
			 * @type {Adobe.Incopy.XMLElementLocation}
			 * @readonly
			 */
			public static readonly elementEnd: Adobe.Incopy.XMLElementLocation;
			/**
			 * Alias for ELEMENT_START. Locates the element at the 
			 * beginning of the containing object.
			 * @type {Adobe.Incopy.XMLElementLocation}
			 * @readonly
			 */
			public static readonly elementStart: Adobe.Incopy.XMLElementLocation;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}