/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class JoinOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for COMBINE. Combine two end points and replace with 
			 * an single averaged point.
			 * @type {Adobe.Indesign.JoinOptions}
			 * @readonly
			 */
			public static readonly combine: Adobe.Indesign.JoinOptions;
			/**
			 * Combine two end points and replace with an single averaged 
			 * point.
			 * @type {Adobe.Indesign.JoinOptions}
			 * @readonly
			 */
			public static readonly COMBINE: Adobe.Indesign.JoinOptions;
			/**
			 * Alias for CONNECT. Connect two end points (default).
			 * @type {Adobe.Indesign.JoinOptions}
			 * @readonly
			 */
			public static readonly connect: Adobe.Indesign.JoinOptions;
			/**
			 * Connect two end points (default).
			 * @type {Adobe.Indesign.JoinOptions}
			 * @readonly
			 */
			public static readonly CONNECT: Adobe.Indesign.JoinOptions;
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