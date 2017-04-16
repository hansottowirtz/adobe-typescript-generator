/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CreateProxy extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALWAYS. Always creates preview images.
			 * @type {Adobe.Indesign.CreateProxy}
			 * @readonly
			 */
			public static readonly always: Adobe.Indesign.CreateProxy;
			/**
			 * Always creates preview images.
			 * @type {Adobe.Indesign.CreateProxy}
			 * @readonly
			 */
			public static readonly ALWAYS: Adobe.Indesign.CreateProxy;
			/**
			 * Creates preview images as needed.
			 * @type {Adobe.Indesign.CreateProxy}
			 * @readonly
			 */
			public static readonly AS_NEEDED: Adobe.Indesign.CreateProxy;
			/**
			 * Alias for AS_NEEDED. Creates preview images as needed.
			 * @type {Adobe.Indesign.CreateProxy}
			 * @readonly
			 */
			public static readonly asNeeded: Adobe.Indesign.CreateProxy;
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