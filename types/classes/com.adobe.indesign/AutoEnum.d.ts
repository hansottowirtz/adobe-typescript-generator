/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AutoEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default value defined automatically for the object 
			 * based on a parent or other type of object.
			 * @type {Adobe.Indesign.AutoEnum}
			 * @readonly
			 */
			public static readonly AUTO_VALUE: Adobe.Indesign.AutoEnum;
			/**
			 * Alias for AUTO_VALUE. Uses the default value defined 
			 * automatically for the object based on a parent or other type 
			 * of object.
			 * @type {Adobe.Indesign.AutoEnum}
			 * @readonly
			 */
			public static readonly autoValue: Adobe.Indesign.AutoEnum;
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