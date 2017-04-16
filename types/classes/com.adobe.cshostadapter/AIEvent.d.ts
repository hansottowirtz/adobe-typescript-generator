/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		/**
		 * Represents an event which occurred in Illustrator. Provides 
		 * a set of event  types which may be listened for via 
		 * AIEventAdapter.addEventListener(...).
		 */
		class AIEvent extends Adobe.Flash.Events.Event {
			/**
			 * Constructs a new AIEvent with the specified type.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Sent when an action event has completed execution.
			 * @type {void}
			 */
			public static readonly ACTION_MANAGER_PLAY_ACTION_EVENT_DONE: any;
			/**
			 * Sent when the key object or the key anchor point to be 
			 * aligned to changes. This happens when there is any change in 
			 * the key art; that is, a reset to NULL, a change from NULL to 
			 * a valid art object, or a change from one object or anchor 
			 * point to another.
			 * @type {void}
			 */
			public static readonly ALIGNMENT_KEY_ART_CHANGED: any;
			/**
			 * Sent after all plug-ins have received and processed 
			 * kAIApplicationStartedNotifier.
			 * @type {void}
			 */
			public static readonly ALL_PLUGIN_STARTED: any;
			/**
			 * Sent at application shutdown, allows you to clean up private 
			 * data. See AIRuntimeSuite.
			 * @type {void}
			 */
			public static readonly APPLICATION_SHUTDOWN: any;
			/**
			 * Your plug-in can subscribe to this notifier when it receives 
			 * the startup selector. It receives the notification only 
			 * once, when the application has completed the startup 
			 * process. This provides an opportunity to perform additional 
			 * setup operations such as restoring plug-in window positions 
			 * and visibility, or operations that depend on suites 
			 * unavailable at an earlier time.
			 * @type {void}
			 */
			public static readonly APPLICATION_STARTED: any;
			/**
			 * Sent when there is a change to custom colors, including 
			 * adding a new color or deleting an existing one. No is data 
			 * sent with the notifier, so the plug-in must determine what 
			 * change occurred using the AICustomColorSuite functions.
			 * @type {void}
			 */
			public static readonly ART_CUSTOM_COLOR_CHANGED: any;
			/**
			 * Sent when a gradient (blend) has changed. See 
			 * AIGradientSuite.
			 * @type {void}
			 */
			public static readonly ART_GRADIENT_CHANGED: any;
			/**
			 * See AIPatternSuite
			 * @type {void}
			 */
			public static readonly ART_PATTERN_CHANGED: any;
			/**
			 * Sent when an object attribute such as the fill or stroke of 
			 * an object changes. Same as kArtSelectionChanged, except that 
			 * it is additionally sent if any global object sets change.
			 * @type {void}
			 */
			public static readonly ART_PROPERTIES_CHANGED: any;
			/**
			 * Sent when either a change in the selected art objects occurs 
			 * or an artwork modification such as moving a point on a path 
			 * occurs. You cannot distinguish a selection change from an 
			 * artwork modification change. There is no notifier than means 
			 * just one or the other. Receiving this does not necessarily 
			 * mean that the set of selected objects, as returned 
			 * AIMatchingArtSuite::GetSelectedArt(), is different.
			 * @type {void}
			 */
			public static readonly ART_SELECTION_CHANGED: any;
			/**
			 * Sent by the Appearance palette when the user double-clicks a 
			 * transparency entry. Used mainly to bring up the transparency 
			 * palette.
			 * @type {void}
			 */
			public static readonly ART_STYLE_EDIT_TRANSPARENCY: any;
			/**
			 * Sent when the focus changes from the entire object to just 
			 * the fill or stroke of the object, or the reverse. The notify 
			 * data includes the current focus as an AIArtStyleFocusValue. 
			 * The current focus controls whether transparency and Live 
			 * Effects applied by the user affect the targeted object as a 
			 * whole or just the fill or stroke of the targeted object.
			 * @type {void}
			 */
			public static readonly ART_STYLE_FOCUS_CHANGED: any;
			/**
			 * Sent when a symbol instance is double-clicked.
			 * @type {void}
			 */
			public static readonly ART_SYMBOL_DOUBLE_CLICKED: any;
			/**
			 * Sent when symbols are added to, removed from, or reordered 
			 * in the symbol list. This message is NOT sent when unlisted 
			 * symbols are created, deleted or modified, nor when the 
			 * definitions or names of symbols are changed, even if they 
			 * are listed. See AISymbolSuite
			 * @type {void}
			 */
			public static readonly ART_SYMBOL_LIST_CHANGED: any;
			/**
			 * Sent when symbols are added, deleted, redefined (including 
			 * indirectly due to redefinition of elements used inside the 
			 * symbol pattern), renamed, sorted or moved in the symbol 
			 * list. This message is sent even when the affected symbols 
			 * are unlisted. See AISymbolSuite
			 * @type {void}
			 */
			public static readonly ART_SYMBOL_SET_CHANGED: any;
			/**
			 * Sent after kAIArtSymbolSetChangedNotifier, with the same 
			 * time stamp. Provides details of the change. The notify data 
			 * is anAISymbolSetChangeNotifierData.
			 * @type {void}
			 */
			public static readonly ART_SYMBOL_SET_DETAILED_CHANGE: any;
			/**
			 * (Internal, do not use) Sent just before isolation-mode focus 
			 * changes from one art object to another. See 
			 * AIIsolationModeSuite Not sent when changes are a result of 
			 * Undo or Redo actions.
			 * @type {void}
			 */
			public static readonly BEFORE_ISOLATION_MODE_CHANGED: any;
			/**
			 * Sent before a font import operation is executed. See 
			 * AIFontSuite.
			 * @type {void}
			 */
			public static readonly BEGIN_IMPORT_COMP_FONT: any;
			/**
			 * See AIPathStyleSuite
			 * @type {void}
			 */
			public static readonly BEGIN_IMPORT_STYLES: any;
			/**
			 * Sent whenever the color management settings for are changed.
			 * @type {void}
			 */
			public static readonly COLOR_CALIBRATION_CHANGED: any;
			/**
			 * Sent when the ruler coordinate system for current view has 
			 * changed.
			 * @type {void}
			 */
			public static readonly CURRENT_COORDINATE_SYSTEM_CHANGED: any;
			/**
			 * Font changed in current document. See AIATETextUtilSuite
			 * @type {void}
			 */
			public static readonly CURRENT_FONT_CHANGED: any;
			/**
			 * Font size changed in current document. See 
			 * AIATETextUtilSuite
			 * @type {void}
			 */
			public static readonly CURRENT_FONT_SIZE_CHANGED: any;
			/**
			 * Sent when a new layer becomes current, but there are no 
			 * changes to the layers themselves (options, names, ordering, 
			 * and so on.)
			 * @type {void}
			 */
			public static readonly CURRENT_LAYER: any;
			/**
			 * Sent right before the last document window of the artwork is 
			 * about to be closed.
			 * @type {void}
			 */
			public static readonly DOCUMENT_ABOUT_TO_CLOSE: any;
			/**
			 * Sent when the document bleed values have been changed. See 
			 * AIDocumentSuite.
			 * @type {void}
			 */
			public static readonly DOCUMENT_BLEEDS_CHANGED: any;
			/**
			 * Sent when the contents of a document have changed.
			 * @type {void}
			 */
			public static readonly DOCUMENT_CHANGED: any;
			/**
			 * Sent when a document has been closed.
			 * @type {void}
			 */
			public static readonly DOCUMENT_CLOSED: any;
			/**
			 * Sent when the color model for a document has changed.
			 * @type {void}
			 */
			public static readonly DOCUMENT_CLR_MDL_CHANGED: any;
			/**
			 * Sent when a crop area has been modified, deleted, or 
			 * created.
			 * @type {void}
			 */
			public static readonly DOCUMENT_CROP_AREA_MODIFIED: any;
			/**
			 * Sent when a new document has been created.
			 * @type {void}
			 */
			public static readonly DOCUMENT_NEW: any;
			/**
			 * Sent when a document has been opened.
			 * @type {void}
			 */
			public static readonly DOCUMENT_OPENED: any;
			/**
			 * Sent when document profiles have been changed.
			 * @type {void}
			 */
			public static readonly DOCUMENT_PROFILES_CHANGED: any;
			/**
			 * Sent when the document ruler origin has been changed or 
			 * reset. See AIDocumentSuite.
			 * @type {void}
			 */
			public static readonly DOCUMENT_RULER_ORIGIN_CHANGED: any;
			/**
			 * Sent when ruler unit has changed.
			 * @type {void}
			 */
			public static readonly DOCUMENT_RULER_UNIT_CHANGED: any;
			/**
			 * Sent whenever the spot color mode of a document has been 
			 * changed. The document is not necessarily an open document 
			 * being edited by a user. For example, swatch libraries are 
			 * considered documents.
			 * @type {void}
			 */
			public static readonly DOCUMENT_SPOT_COLOR_MODE_CHANGED: any;
			/**
			 * Sent when the active view switches from one view window to 
			 * another. See AIDocumentViewSuite.
			 * @type {void}
			 */
			public static readonly DOCUMENT_VIEW_ACTIVE_VIEW_CHANGED: any;
			/**
			 * Sent when the document view changes. See 
			 * AIDocumentViewSuite.
			 * @type {void}
			 */
			public static readonly DOCUMENT_VIEW_CHANGED: any;
			/**
			 * See AIDocumentViewSuite::GetDocumentViewInvalidRect()
			 * @type {void}
			 */
			public static readonly DOCUMENT_VIEW_INVALID_RECT_CHANGED: any;
			/**
			 * Sent when the active view's plate set's state changes. See 
			 * AIDocumentViewSuite.
			 * @type {void}
			 */
			public static readonly DOCUMENT_VIEW_OPP_PLATE_STATE_CHANGED: any;
			/**
			 * Sent when the document view style changes. See 
			 * AIDocumentViewSuite.
			 * @type {void}
			 */
			public static readonly DOCUMENT_VIEW_STYLE_CHANGED: any;
			/**
			 * Sent just after serializing a document to an Illustrator 
			 * file format, and before the flattening layer is removed (if 
			 * the document was flattened). Allows plug-ins to clean up 
			 * anything that was done during preprocessing.
			 * @type {void}
			 */
			public static readonly DOCUMENT_WRITE_POSTPROCESS: any;
			/**
			 * Sent just before the document is saved, along with the AI 
			 * Version information to allow any data conversion required 
			 * for saving to legacy files. For example, Unicode data must 
			 * be converted to Platform encoding before saving to AI 
			 * versions less than version 12.
			 * @type {void}
			 */
			public static readonly DOCUMENT_WRITE_PREPROCESS: any;
			/**
			 * Sent when drawing mode of a document changes
			 * @type {void}
			 */
			public static readonly DRAWING_MODE_CHANGED: any;
			/**
			 * Sent after a font import operation is executed. See 
			 * AIFontSuite.
			 * @type {void}
			 */
			public static readonly END_IMPORT_COMP_FONT: any;
			/**
			 * See AIPathStyleSuite
			 * @type {void}
			 */
			public static readonly END_IMPORT_STYLES: any;
			/**
			 * Sent by the eyedropper when it is selected and dragged. The 
			 * data is an AIEyedropperDragNotifyData specifying the event 
			 * and whether the path style has changed as a result.
			 * @type {void}
			 */
			public static readonly EYEDROPPER_DRAG: any;
			/**
			 * If a notifier plug-in requests this type of notification, it 
			 * receives this selector when any open-file action has been 
			 * completed. See the AINotifierSuite.
			 * @type {void}
			 */
			public static readonly FILE_FORMAT_DOCUMENT_OPENED: any;
			/**
			 * If a notifier plug-in requests this type of notification, it 
			 * receives this selector when Illustrator cannot find a linked 
			 * file for the current document. The notification data sent is 
			 * of type AILinkUpdateNotifyData.
			 * @type {void}
			 */
			public static readonly FILE_FORMAT_LINK_UPDATE: any;
			/**
			 * List of available fonts changed. See AIATETextUtilSuite
			 * @type {void}
			 */
			public static readonly FONT_LIST_CHANGED: any;
			/**
			 * (Internal, do not use) Sent after isolation-mode focus 
			 * changes from one art object to another. See 
			 * AIIsolationModeSuite Not sent when changes are a result of 
			 * Undo or Redo actions.
			 * @type {void}
			 */
			public static readonly ISOLATION_MODE_CHANGED: any;
			/**
			 * @type {void}
			 */
			public static readonly LAUNCH_PROJECT_BRIDGE: any;
			/**
			 * Sent when layers are deleted. kAILayerSetNotifier is sent at 
			 * the same time. Subscribe to this one if you care ONLY about 
			 * deletions, but NOT new layers or reorderings; for example, 
			 * to remove references to deleted layers,
			 * @type {void}
			 */
			public static readonly LAYER_DELETION: any;
			/**
			 * Sent when a layer list is pushed or popped. See 
			 * AILayerListSuite.
			 * @type {void}
			 */
			public static readonly LAYER_LIST_CHANGED: any;
			/**
			 * Sent when layers have changed options, such as name, 
			 * selection color, lock status, visibility, view mode, and so 
			 * on.)
			 * @type {void}
			 */
			public static readonly LAYER_OPTIONS: any;
			/**
			 * Sent when layers are added, deleted, or reordered. Respond, 
			 * for example, by rebuilding the list for a layer palette.
			 * @type {void}
			 */
			public static readonly LAYER_SET: any;
			/**
			 * Sent after a plug-in menu item is executed. See AIMenuSuite
			 * @type {void}
			 */
			public static readonly MENU_AFTER_PLUGIN: any;
			/**
			 * Sent after an Illustrator menu item is executed, if that 
			 * item is not identified in the MenuCommands list. See 
			 * AIMenuSuite
			 * @type {void}
			 */
			public static readonly MENU_AFTER_UNKNOWN_MENU: any;
			/**
			 * Sent before a plug-in menu item is executed. See AIMenuSuite
			 * @type {void}
			 */
			public static readonly MENU_BEFORE_PLUGIN: any;
			/**
			 * Sent before an Illustrator menu item is executed, if that 
			 * item is not identified in the MenuCommands list. See 
			 * AIMenuSuite
			 * @type {void}
			 */
			public static readonly MENU_BEFORE_UNKNOWN_MENU: any;
			/**
			 * Sent when a menu item is modified using AIMenuSuite 
			 * functions. Receives no associated data.
			 * @type {void}
			 */
			public static readonly MENU_CHANGED: any;
			/**
			 * Sent when an operation requiring update of metadata is about 
			 * to occur. For example, sent before any file format is called 
			 * or written. Register for this if you need to keep metadata 
			 * current. If you add any function that assumes the metadata 
			 * is current (for a metadata browser, for example), send this 
			 * notifier. See AIXMLDocumentSuite
			 * @type {void}
			 */
			public static readonly METADATA_SYNC: any;
			/**
			 * Sent when the list of styles in the Graphic Styles palette 
			 * changes in any way, such as the order of the list, the names 
			 * of the styles, deletions, additions, and so on. Also sent 
			 * when such changes are undone or redone.
			 * @type {void}
			 */
			public static readonly NAMED_STYLE_LIST_CHANGED: any;
			/**
			 * Object sets are deprecated in favor of dictionaries, see 
			 * AIDictionarySuite
			 * @type {void}
			 */
			public static readonly OBJECT_SET_CHANGED: any;
			/**
			 * See AIPaintStyleSuite
			 * @type {void}
			 */
			public static readonly PAINT_STYLE_FILL_STROKE_CHANGED: any;
			/**
			 * See AIPaintStyleSuite
			 * @type {void}
			 */
			public static readonly PAINT_STYLE_GRADIENT_STOP_CHANGED: any;
			/**
			 * Sent when perspective grid visibility is changed.
			 * @type {void}
			 */
			public static readonly PERSPECTIVE_GRID_VISIBILITY_CHANGED: any;
			/**
			 * Sent when perspective grid parameters are changed.
			 * @type {void}
			 */
			public static readonly PERSPECTIVE_PARAMS_CHANGED: any;
			/**
			 * Sent before Illustrator sends the application-stopped 
			 * notifier.
			 * @type {void}
			 */
			public static readonly PLUGIN_STOPPING: any;
			/**
			 * Sent when a change is made to the preferences. See 
			 * AIPreferenceSuite
			 * @type {void}
			 */
			public static readonly PREFERENCE_CHANGED: any;
			/**
			 * Object sets are deprecated in favor of dictionaries, see 
			 * AIDictionarySuite
			 * @type {void}
			 */
			public static readonly REPLACE_COLOR: any;
			/**
			 * See AISlicingSuite
			 * @type {void}
			 */
			public static readonly SLICING_CHANGED: any;
			/**
			 * See AISVGFilterAddedNotifierData.
			 * @type {void}
			 */
			public static readonly SVG_FILTER_ADDED: any;
			/**
			 * See AISVGFilterSuite
			 * @type {void}
			 */
			public static readonly SVG_FILTER_CHANGED: any;
			/**
			 * Sent when the Swatch Library is opened and has been modified 
			 * since the last load or when it is reloaded because the user 
			 * saved to it.
			 * @type {void}
			 */
			public static readonly SWATCH_LIBRARY_CHANGED: any;
			/**
			 * See AITagSuite
			 * @type {void}
			 */
			public static readonly TAG_CHANGED: any;
			/**
			 * Sent when the current tool is changed to a different tool.
			 * @type {void}
			 */
			public static readonly TOOL_CHANGED: any;
			/**
			 * Sent to notify tools that they should clear any editing 
			 * state that they maintain. Tools other than the current tool 
			 * might maintain editing state; for example, selecting the 
			 * zoom tool does not clear the editing state of the pen tool, 
			 * which remembers the path to which it is adding points.
			 * @type {void}
			 */
			public static readonly TOOL_CLEAR_STATE: any;
			/**
			 * Sent when a tool is deselected. The data is the 
			 * AIToolHandle.
			 * @type {void}
			 */
			public static readonly TOOL_DESELECTED: any;
			/**
			 * Sent when a tool's help ID is changed. See 
			 * AIToolSuite::SetToolHelpID()
			 * @type {void}
			 */
			public static readonly TOOL_HELP_ID_CHANGED: any;
			/**
			 * Sent when a tool's icon is changed. See 
			 * AIToolSuite::SetToolIcon() and 
			 * AIToolSuite::SetToolRolloverIcon()
			 * @type {void}
			 */
			public static readonly TOOL_ICON_CHANGED: any;
			/**
			 * Sent when the modifier keys for the current tool are 
			 * changed.
			 * @type {void}
			 */
			public static readonly TOOL_MODIFIERS_CHANGED: any;
			/**
			 * Sent when the cursor enters a document window. See also 
			 * kAIToolSuspendNotifier.
			 * @type {void}
			 */
			public static readonly TOOL_RESUME: any;
			/**
			 * Sent when the original tool is restored from a temporary 
			 * switch back to kSelectTool, kDirectSelectTool, or 
			 * kDirectObjectSelectTool. Sent when the Ctrl or Cmd key is 
			 * released.
			 * @type {void}
			 */
			public static readonly TOOL_RESUMED_BY_CMD_KEY: any;
			/**
			 * Sent when the user releases the spacebar (or Ctrl+spacebar, 
			 * or Ctrl+Alt+spacebar) to resume using the original tool.
			 * @type {void}
			 */
			public static readonly TOOL_RESUMED_BY_SPACEBAR: any;
			/**
			 * Sent when a tool is selected. The data is the AIToolHandle. 
			 * Reselection of an already selected tool sends both 
			 * kAIToolDeselectedNotifier and kAIToolSelectedNotifier with 
			 * the kSelectorAIReselectTool message.
			 * @type {void}
			 */
			public static readonly TOOL_SELECTED: any;
			/**
			 * Sent when the cursor leaves a document window. See also 
			 * kAIToolResumeNotifier.
			 * @type {void}
			 */
			public static readonly TOOL_SUSPEND: any;
			/**
			 * Sent when kSelectTool, kDirectSelectTool, or 
			 * kDirectObjectSelectTool is temporarily reselected by 
			 * pressing Ctrl(Windows) or Cmd(Macintosh) key while using 
			 * another tool. For example, if kDirectSelectTool is selected 
			 * and you then choose the eraser tool, pressing the Ctrl or 
			 * Cmd key temporarily switches back to kDirectSelectTool, and 
			 * sends this notification.
			 * @type {void}
			 */
			public static readonly TOOL_SUSPENDED_BY_CMD_KEY: any;
			/**
			 * Sent when the user presses the space bar to select the 
			 * scroll tool (kScrollTool) or zoom tool (kZoomTool), or 
			 * presses Ctrl+spacebar, or Ctrl+Alt+spacebar while using 
			 * another tool.
			 * @type {void}
			 */
			public static readonly TOOL_SUSPENDED_BY_SPACEBAR: any;
			/**
			 * Sent when AIToolTabletPointerType is changed.
			 * @type {void}
			 */
			public static readonly TOOL_TABLET_POINTER_TYPE_CHANGED: any;
			/**
			 * Sent when the title string of a tool is changed. See 
			 * AIToolSuite::SetToolTitle()
			 * @type {void}
			 */
			public static readonly TOOL_TITLE_CHANGED: any;
			/**
			 * Sent when a tool's rollover tooltip is changed.
			 * @type {void}
			 */
			public static readonly TOOL_TOOLTIP_CHANGED: any;
			/**
			 * Sent when the tool window has changed.
			 * @type {void}
			 */
			public static readonly TOOL_WINDOW_CHANGED: any;
			/**
			 * Sent when a tracing preset (a named collection of 
			 * configuration state data for a specific tracing operation) 
			 * is created or renamed. See AITracingSuite.
			 * @type {void}
			 */
			public static readonly TRACING_PRESET_NAME_CHANGED: any;
			/**
			 * Sent after an Update call is made and completed. Message 
			 * data contains the tracing object being updated. See 
			 * AITracingSuite.
			 * @type {void}
			 */
			public static readonly TRACING_UPDATE: any;
			/**
			 * The eyedropper sends this while tracking a mouse drag, to 
			 * notify the Color palette to update its proxies during the 
			 * drag, using the path style and map in the 
			 * AIUpdatePathStyleNotifyData. See AIPaintStyleSuite
			 * @type {void}
			 */
			public static readonly UPDATE_PATH_STYLE: any;
			/**
			 * Sent when a property of a plug-in tool is changed, such as 
			 * its options, title, icon, or tooltip.
			 * @type {void}
			 */
			public static readonly USER_TOOL_CHANGED: any;
		}
	}
}