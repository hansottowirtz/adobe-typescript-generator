/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RotationDirection extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BACKWARD. Rotate the list backward (i.e., move 
			 * backmost item to front)
			 * @type {Adobe.Indesign.RotationDirection}
			 * @readonly
			 */
			public static readonly backward: Adobe.Indesign.RotationDirection;
			/**
			 * Rotate the list backward (i.e., move backmost item to front)
			 * @type {Adobe.Indesign.RotationDirection}
			 * @readonly
			 */
			public static readonly BACKWARD: Adobe.Indesign.RotationDirection;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FORWARD. Rotate the list forward (i.e., move the 
			 * front item to end)
			 * @type {Adobe.Indesign.RotationDirection}
			 * @readonly
			 */
			public static readonly forward: Adobe.Indesign.RotationDirection;
			/**
			 * Rotate the list forward (i.e., move the front item to end)
			 * @type {Adobe.Indesign.RotationDirection}
			 * @readonly
			 */
			public static readonly FORWARD: Adobe.Indesign.RotationDirection;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}