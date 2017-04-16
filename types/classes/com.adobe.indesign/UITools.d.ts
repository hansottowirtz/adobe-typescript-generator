/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UITools extends Adobe.Csawlib.CSEnumBase {
			/** The add anchor point tool */
			public static readonly ADD_ANCHOR_POINT: Adobe.Indesign.UITools;
			/** Alias for ADD_ANCHOR_POINT. The add anchor point tool */
			public static readonly addAnchorPoint: Adobe.Indesign.UITools;
			/** The convert direction point tool */
			public static readonly CONVERT_DIRECTION_POINT: Adobe.Indesign.UITools;
			/**
			 * Alias for CONVERT_DIRECTION_POINT. The convert direction 
			 * point tool
			 */
			public static readonly convertDirectionPoint: Adobe.Indesign.UITools;
			/** The delete anchor point tool */
			public static readonly DELETE_ANCHOR_POINT: Adobe.Indesign.UITools;
			/** Alias for DELETE_ANCHOR_POINT. The delete anchor point tool */
			public static readonly deleteAnchorPoint: Adobe.Indesign.UITools;
			/** The direct selection tool */
			public static readonly DIRECT_SELECTION_TOOL: Adobe.Indesign.UITools;
			/** Alias for DIRECT_SELECTION_TOOL. The direct selection tool */
			public static readonly directSelectionTool: Adobe.Indesign.UITools;
			/** The ellipse frame tool */
			public static readonly ELLIPSE_FRAME_TOOL: Adobe.Indesign.UITools;
			/** The ellipse tool */
			public static readonly ELLIPSE_TOOL: Adobe.Indesign.UITools;
			/** Alias for ELLIPSE_FRAME_TOOL. The ellipse frame tool */
			public static readonly ellipseFrameTool: Adobe.Indesign.UITools;
			/** Alias for ELLIPSE_TOOL. The ellipse tool */
			public static readonly ellipseTool: Adobe.Indesign.UITools;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The erase tool */
			public static readonly ERASE_TOOL: Adobe.Indesign.UITools;
			/** Alias for ERASE_TOOL. The erase tool */
			public static readonly eraseTool: Adobe.Indesign.UITools;
			/** The eye dropper tool */
			public static readonly EYE_DROPPER_TOOL: Adobe.Indesign.UITools;
			/** Alias for EYE_DROPPER_TOOL. The eye dropper tool */
			public static readonly eyeDropperTool: Adobe.Indesign.UITools;
			/** The free transform tool */
			public static readonly FREE_TRANSFORM_TOOL: Adobe.Indesign.UITools;
			/** Alias for FREE_TRANSFORM_TOOL. The free transform tool */
			public static readonly freeTransformTool: Adobe.Indesign.UITools;
			/** The gap tool */
			public static readonly GAP_TOOL: Adobe.Indesign.UITools;
			/** Alias for GAP_TOOL. The gap tool */
			public static readonly gapTool: Adobe.Indesign.UITools;
			/** The gradient feather tool */
			public static readonly GRADIENT_FEATHER_TOOL: Adobe.Indesign.UITools;
			/** The gradient swatch tool */
			public static readonly GRADIENT_SWATCH_TOOL: Adobe.Indesign.UITools;
			/** Alias for GRADIENT_FEATHER_TOOL. The gradient feather tool */
			public static readonly gradientFeatherTool: Adobe.Indesign.UITools;
			/** Alias for GRADIENT_SWATCH_TOOL. The gradient swatch tool */
			public static readonly gradientSwatchTool: Adobe.Indesign.UITools;
			/** The hand tool */
			public static readonly HAND_TOOL: Adobe.Indesign.UITools;
			/** Alias for HAND_TOOL. The hand tool */
			public static readonly handTool: Adobe.Indesign.UITools;
			/** The line tool */
			public static readonly LINE_TOOL: Adobe.Indesign.UITools;
			/** Alias for LINE_TOOL. The line tool */
			public static readonly lineTool: Adobe.Indesign.UITools;
			/** The measure tool */
			public static readonly MEASURE_TOOL: Adobe.Indesign.UITools;
			/** Alias for MEASURE_TOOL. The measure tool */
			public static readonly measureTool: Adobe.Indesign.UITools;
			/** The motion path tool */
			public static readonly MOTION_PATH_TOOL: Adobe.Indesign.UITools;
			/** Alias for MOTION_PATH_TOOL. The motion path tool */
			public static readonly motionPathTool: Adobe.Indesign.UITools;
			/** Alias for NONE. No selection */
			public static readonly none: Adobe.Indesign.UITools;
			/** No selection */
			public static readonly NONE: Adobe.Indesign.UITools;
			/** The note tool */
			public static readonly NOTE_TOOL: Adobe.Indesign.UITools;
			/** Alias for NOTE_TOOL. The note tool */
			public static readonly noteTool: Adobe.Indesign.UITools;
			/** The page tool */
			public static readonly PAGE_TOOL: Adobe.Indesign.UITools;
			/** Alias for PAGE_TOOL. The page tool */
			public static readonly pageTool: Adobe.Indesign.UITools;
			/** The pen tool */
			public static readonly PEN_TOOL: Adobe.Indesign.UITools;
			/** The pencil tool */
			public static readonly PENCIL_TOOL: Adobe.Indesign.UITools;
			/** Alias for PENCIL_TOOL. The pencil tool */
			public static readonly pencilTool: Adobe.Indesign.UITools;
			/** Alias for PEN_TOOL. The pen tool */
			public static readonly penTool: Adobe.Indesign.UITools;
			/**
			 * The place cursor tool which gets set after an import via the 
			 * Place command
			 */
			public static readonly PLACE_CURSOR_TOOL: Adobe.Indesign.UITools;
			/**
			 * Alias for PLACE_CURSOR_TOOL. The place cursor tool which 
			 * gets set after an import via the Place command
			 */
			public static readonly placeCursorTool: Adobe.Indesign.UITools;
			/** The polygon frame tool */
			public static readonly POLYGON_FRAME_TOOL: Adobe.Indesign.UITools;
			/** The polygon tool */
			public static readonly POLYGON_TOOL: Adobe.Indesign.UITools;
			/** Alias for POLYGON_FRAME_TOOL. The polygon frame tool */
			public static readonly polygonFrameTool: Adobe.Indesign.UITools;
			/** Alias for POLYGON_TOOL. The polygon tool */
			public static readonly polygonTool: Adobe.Indesign.UITools;
			/** The rectangle frame tool */
			public static readonly RECTANGLE_FRAME_TOOL: Adobe.Indesign.UITools;
			/** The rectangle tool */
			public static readonly RECTANGLE_TOOL: Adobe.Indesign.UITools;
			/** Alias for RECTANGLE_FRAME_TOOL. The rectangle frame tool */
			public static readonly rectangleFrameTool: Adobe.Indesign.UITools;
			/** Alias for RECTANGLE_TOOL. The rectangle tool */
			public static readonly rectangleTool: Adobe.Indesign.UITools;
			/** The rotate tool */
			public static readonly ROTATE_TOOL: Adobe.Indesign.UITools;
			/** Alias for ROTATE_TOOL. The rotate tool */
			public static readonly rotateTool: Adobe.Indesign.UITools;
			/** The scale tool */
			public static readonly SCALE_TOOL: Adobe.Indesign.UITools;
			/** Alias for SCALE_TOOL. The scale tool */
			public static readonly scaleTool: Adobe.Indesign.UITools;
			/** The scissors tool */
			public static readonly SCISSORS_TOOL: Adobe.Indesign.UITools;
			/** Alias for SCISSORS_TOOL. The scissors tool */
			public static readonly scissorsTool: Adobe.Indesign.UITools;
			/** The selection tool */
			public static readonly SELECTION_TOOL: Adobe.Indesign.UITools;
			/** Alias for SELECTION_TOOL. The selection tool */
			public static readonly selectionTool: Adobe.Indesign.UITools;
			/** The shear tool */
			public static readonly SHEAR_TOOL: Adobe.Indesign.UITools;
			/** Alias for SHEAR_TOOL. The shear tool */
			public static readonly shearTool: Adobe.Indesign.UITools;
			/** The smooth tool */
			public static readonly SMOOTH_TOOL: Adobe.Indesign.UITools;
			/** Alias for SMOOTH_TOOL. The smooth tool */
			public static readonly smoothTool: Adobe.Indesign.UITools;
			/** The table creation tool */
			public static readonly TABLE_TOOL: Adobe.Indesign.UITools;
			/** Alias for TABLE_TOOL. The table creation tool */
			public static readonly tableTool: Adobe.Indesign.UITools;
			/** The type on a path tool */
			public static readonly TYPE_ON_PATH_TOOL: Adobe.Indesign.UITools;
			/** The type tool */
			public static readonly TYPE_TOOL: Adobe.Indesign.UITools;
			/** Alias for TYPE_ON_PATH_TOOL. The type on a path tool */
			public static readonly typeOnPathTool: Adobe.Indesign.UITools;
			/** Alias for TYPE_TOOL. The type tool */
			public static readonly typeTool: Adobe.Indesign.UITools;
			/** The zoom tool */
			public static readonly ZOOM_TOOL: Adobe.Indesign.UITools;
			/** Alias for ZOOM_TOOL. The zoom tool */
			public static readonly zoomTool: Adobe.Indesign.UITools;
			/** Constructor */
			public constructor();
		}
	}
}