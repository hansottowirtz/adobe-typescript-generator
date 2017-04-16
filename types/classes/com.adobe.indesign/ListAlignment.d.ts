/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ListAlignment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Align center.
			 * @type {Adobe.Indesign.ListAlignment}
			 * @readonly
			 */
			public static readonly CENTER_ALIGN: Adobe.Indesign.ListAlignment;
			/**
			 * Alias for CENTER_ALIGN. Align center.
			 * @type {Adobe.Indesign.ListAlignment}
			 * @readonly
			 */
			public static readonly centerAlign: Adobe.Indesign.ListAlignment;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align left.
			 * @type {Adobe.Indesign.ListAlignment}
			 * @readonly
			 */
			public static readonly LEFT_ALIGN: Adobe.Indesign.ListAlignment;
			/**
			 * Alias for LEFT_ALIGN. Align left.
			 * @type {Adobe.Indesign.ListAlignment}
			 * @readonly
			 */
			public static readonly leftAlign: Adobe.Indesign.ListAlignment;
			/**
			 * Align right.
			 * @type {Adobe.Indesign.ListAlignment}
			 * @readonly
			 */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.ListAlignment;
			/**
			 * Alias for RIGHT_ALIGN. Align right.
			 * @type {Adobe.Indesign.ListAlignment}
			 * @readonly
			 */
			public static readonly rightAlign: Adobe.Indesign.ListAlignment;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}