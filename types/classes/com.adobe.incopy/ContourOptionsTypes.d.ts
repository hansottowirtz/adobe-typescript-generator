/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ContourOptionsTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sets the text wrap shape to the edges of the specified alpha 
			 * channel. To specify the alpha channel, see contour path 
			 * name.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly ALPHA_CHANNEL: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Alias for ALPHA_CHANNEL. Sets the text wrap shape to the 
			 * edges of the specified alpha channel. To specify the alpha 
			 * channel, see contour path name.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly alphaChannel: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Sets the text wrap shape to the object's bounding box.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly BOUNDING_BOX: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Alias for BOUNDING_BOX. Sets the text wrap shape to the 
			 * object's bounding box.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly boundingBox: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Sets the text wrap shape to the edges of the image.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly DETECT_EDGES: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Alias for DETECT_EDGES. Sets the text wrap shape to the 
			 * edges of the image.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly detectEdges: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Sets the text wrap shape to the wrapped object's graphics 
			 * frame.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly GRAPHIC_FRAME: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Alias for GRAPHIC_FRAME. Sets the text wrap shape to the 
			 * wrapped object's graphics frame.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly graphicFrame: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Sets the text wrap shape to the specified Photoshop path. To 
			 * specify the Photoshop path, see contour path name.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly PHOTOSHOP_PATH: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Alias for PHOTOSHOP_PATH. Sets the text wrap shape to the 
			 * specified Photoshop path. To specify the Photoshop path, see 
			 * contour path name.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly photoshopPath: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Sets the text wrap shape to the clipping path (if any) 
			 * defined in Photoshop. Note: A path cannot be specified using 
			 * this enumeration. To set the text wrap shape to a specific 
			 * path, use the photoshop path contour options type 
			 * enumeration value.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly SAME_AS_CLIPPING: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Alias for SAME_AS_CLIPPING. Sets the text wrap shape to the 
			 * clipping path (if any) defined in Photoshop. Note: A path 
			 * cannot be specified using this enumeration. To set the text 
			 * wrap shape to a specific path, use the photoshop path 
			 * contour options type enumeration value.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 * @readonly
			 */
			public static readonly sameAsClipping: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}