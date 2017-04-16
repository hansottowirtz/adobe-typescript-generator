/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FeatherCornerType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DIFFUSION. The edges of the object fade from 
			 * opaque to transparent.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 * @readonly
			 */
			public static readonly diffusion: Adobe.Indesign.FeatherCornerType;
			/**
			 * The edges of the object fade from opaque to transparent.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 * @readonly
			 */
			public static readonly DIFFUSION: Adobe.Indesign.FeatherCornerType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for ROUNDED. The corners are rounded by the feather 
			 * radius.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 * @readonly
			 */
			public static readonly rounded: Adobe.Indesign.FeatherCornerType;
			/**
			 * The corners are rounded by the feather radius.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 * @readonly
			 */
			public static readonly ROUNDED: Adobe.Indesign.FeatherCornerType;
			/**
			 * Alias for SHARP. The gradient exactly follows the outer edge 
			 * of the object, including sharp corners.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 * @readonly
			 */
			public static readonly sharp: Adobe.Indesign.FeatherCornerType;
			/**
			 * The gradient exactly follows the outer edge of the object, 
			 * including sharp corners.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 * @readonly
			 */
			public static readonly SHARP: Adobe.Indesign.FeatherCornerType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}