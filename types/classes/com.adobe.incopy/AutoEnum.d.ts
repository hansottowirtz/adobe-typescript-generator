/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AutoEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default value defined automatically for the object 
			 * based on a parent or other type of object.
			 * @type {Adobe.Incopy.AutoEnum}
			 * @readonly
			 */
			public static readonly AUTO_VALUE: Adobe.Incopy.AutoEnum;
			/**
			 * Alias for AUTO_VALUE. Uses the default value defined 
			 * automatically for the object based on a parent or other type 
			 * of object.
			 * @type {Adobe.Incopy.AutoEnum}
			 * @readonly
			 */
			public static readonly autoValue: Adobe.Incopy.AutoEnum;
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