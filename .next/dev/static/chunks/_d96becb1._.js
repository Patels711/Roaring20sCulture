(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/building-floor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuildingFloor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function BuildingFloor({ room, isUnlocked, isCompleted, onEnter, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        initial: {
            opacity: 0,
            x: -30
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.12
        },
        disabled: !isUnlocked,
        onClick: onEnter,
        className: `relative w-full group building-ascend transition-all duration-300 ${isUnlocked ? "cursor-pointer" : "cursor-not-allowed"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative overflow-hidden py-8 px-10 transition-all duration-300 border-l-8 border-r-8 ${isCompleted ? "bg-gradient-to-r from-primary/25 via-primary/10 to-accent/25 border-primary/70 shadow-lg shadow-primary/20" : isUnlocked ? "bg-gradient-to-r from-secondary/40 via-background to-primary/15 border-secondary/70 hover:from-secondary/50 hover:via-secondary/10 hover:to-primary/25 shadow-lg shadow-secondary/15 hover:shadow-secondary/25" : "bg-gradient-to-r from-muted/30 to-muted/20 border-muted-foreground/40 opacity-60"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-full h-full",
                        viewBox: "0 0 600 120",
                        preserveAspectRatio: "none",
                        opacity: "0.3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: `deco-${room.id}`,
                                    x: "0",
                                    y: "0",
                                    width: "80",
                                    height: "80",
                                    patternUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "0",
                                            y1: "40",
                                            x2: "80",
                                            y2: "40",
                                            stroke: "currentColor",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "40,0 50,25 40,40 30,25",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "40",
                                            cy: "40",
                                            r: "25",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "0.5",
                                            opacity: "0.7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/building-floor.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "600",
                                height: "120",
                                fill: `url(#deco-${room.id})`
                            }, void 0, false, {
                                fileName: "[project]/components/building-floor.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/building-floor.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/building-floor.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary/70 transition-colors"
                }, void 0, false, {
                    fileName: "[project]/components/building-floor.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-1 right-2 w-4 h-4 border-b-2 border-r-2 border-accent/40 group-hover:border-accent/70 transition-colors"
                }, void 0, false, {
                    fileName: "[project]/components/building-floor.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-between gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-6xl font-black tracking-wider ${isCompleted ? "text-primary" : "text-accent"}`,
                                            children: room.floor
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-widest text-muted-foreground mt-2 font-bold",
                                            children: "Floor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 relative",
                                    children: isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center border-2 border-primary/70 shadow-lg shadow-primary/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-7 h-7 text-primary",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2.5,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/building-floor.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/building-floor.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this) : isUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/20 flex items-center justify-center border-2 border-secondary/70 art-deco-pulse shadow-lg shadow-secondary/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-7 h-7 text-secondary",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-2c1.66 0 3 1.34 3 3v2H9V6c0-1.66 1.34-3 3-3z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/building-floor.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/building-floor.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-muted/40 flex items-center justify-center border-2 border-muted-foreground/40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-7 h-7 text-muted-foreground/60",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/building-floor.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/building-floor.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/building-floor.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/building-floor.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-2xl font-black mb-2 uppercase tracking-wider ${isUnlocked ? "text-foreground drop-shadow-md" : "text-muted-foreground/60"}`,
                                    children: room.title
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm font-medium ${isUnlocked ? "text-muted-foreground/80" : "text-muted-foreground/40"}`,
                                    children: room.description
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/building-floor.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        isUnlocked && !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-bold text-primary uppercase tracking-widest group-hover:text-accent transition-colors",
                                    children: "ENTER"
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl group-hover:translate-x-2 transition-transform font-bold text-secondary",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/building-floor.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-bold text-primary uppercase tracking-widest",
                                    children: "Ascended"
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl text-primary font-bold",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/components/building-floor.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/building-floor.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/building-floor.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/building-floor.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/building-floor.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/building-floor.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/building-floor.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = BuildingFloor;
var _c;
__turbopack_context__.k.register(_c, "BuildingFloor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/museum-lobby.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MuseumLobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$building$2d$floor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/building-floor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ROOMS = [
    {
        id: "intro",
        title: "The Roaring Culture",
        floor: 1,
        description: "A Journey Begins"
    },
    {
        id: "women",
        title: "Women's Revolution",
        floor: 2,
        description: "Explore the Changing Role of Women"
    },
    {
        id: "leisure-tech",
        title: "Leisure & Technology",
        floor: 3,
        description: "Innovation and Entertainment"
    },
    {
        id: "modernism",
        title: "Modernism in Art & Literature",
        floor: 4,
        description: "Artistic Revolution of the Era"
    },
    {
        id: "culture-urban",
        title: "Culture vs Urban Life",
        floor: 5,
        description: "The Clash of Tradition and Modernity"
    },
    {
        id: "answers",
        title: "The Podcast Zone",
        floor: 6,
        description: "Congratulation Screen and EQ Podcast"
    }
];
function MuseumLobby({ onSelectRoom, completedRooms }) {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MuseumLobby.useEffect": ()=>{
            setIsLoading(false);
        }
    }["MuseumLobby.useEffect"], []);
    const isRoomUnlocked = (floor)=>{
        if (floor === 1) return true;
        return completedRooms.length >= floor - 1;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header-blurred relative z-20 py-12 border-b-2 border-primary/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block px-6 py-2 border-2 border-primary/60 mb-4 relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-primary/10 -z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/museum-lobby.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-primary tracking-widest",
                                            children: "Ashwath R. Jiya N. Dashna P. Sahya P. 11/1 D"
                                        }, void 0, false, {
                                            fileName: "[project]/components/museum-lobby.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/museum-lobby.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-7xl font-black mb-4 glow-text tracking-wider drop-shadow-lg",
                                    children: "Smithsonian Museum"
                                }, void 0, false, {
                                    fileName: "[project]/components/museum-lobby.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-primary font-bold tracking-widest",
                                    children: "Escape Room: The 1920s Roaring Culture"
                                }, void 0, false, {
                                    fileName: "[project]/components/museum-lobby.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/museum-lobby.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-12 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative px-6 py-3 border-2 border-primary/50 hover:border-primary/80 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg text-primary font-black",
                                            children: completedRooms.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/museum-lobby.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-widest text-muted-foreground",
                                            children: "Floors Conquered"
                                        }, void 0, false, {
                                            fileName: "[project]/components/museum-lobby.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/museum-lobby.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/museum-lobby.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative px-6 py-3 border-2 border-accent/50 hover:border-accent/80 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg text-accent font-black",
                                            children: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/museum-lobby.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-widest text-muted-foreground",
                                            children: "Floors Total"
                                        }, void 0, false, {
                                            fileName: "[project]/components/museum-lobby.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/museum-lobby.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/museum-lobby.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/museum-lobby.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/museum-lobby.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 top-0 mural-glow",
                style: {
                    top: "var(--header-height)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 mural-bg-main"
                    }, void 0, false, {
                        fileName: "[project]/components/museum-lobby.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 mural-overlay"
                    }, void 0, false, {
                        fileName: "[project]/components/museum-lobby.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-pulse",
                                style: {
                                    animationDelay: "1s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/50"
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/50"
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/museum-lobby.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/museum-lobby.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-6xl mx-auto px-4 py-96 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 -inset-8 bg-gradient-to-b from-primary/20 via-primary/15 to-accent/10 rounded-lg blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 -inset-8 bg-background/85 rounded-lg backdrop-blur-lg border-2 border-primary/40 shadow-2xl shadow-primary/30 w-full max-w-xl mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-16 max-w-3xl mx-auto relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -inset-8 border-2 border-primary/30 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/museum-lobby.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -inset-8 bg-background/40 -z-10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/museum-lobby.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/95 text-lg leading-relaxed font-light",
                                                children: "You stand in the lobby of the magnificent Smithsonian Museum. To escape, you must ascend through each floor, answering trivia about the Roaring Twenties Culture. Complete each floor to unlock the next. The higher you climb, the closer you get to freedom."
                                            }, void 0, false, {
                                                fileName: "[project]/components/museum-lobby.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/museum-lobby.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 max-w-3xl mx-auto relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/museum-lobby.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            ROOMS.map((room, index)=>{
                                                const isUnlocked = isRoomUnlocked(room.floor);
                                                const isCompleted = completedRooms.includes(room.id);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$building$2d$floor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    room: room,
                                                    isUnlocked: isUnlocked,
                                                    isCompleted: isCompleted,
                                                    onEnter: ()=>onSelectRoom(room.id),
                                                    index: index
                                                }, room.id, false, {
                                                    fileName: "[project]/components/museum-lobby.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/museum-lobby.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/museum-lobby.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/museum-lobby.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/museum-lobby.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/museum-lobby.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/museum-lobby.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(MuseumLobby, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c = MuseumLobby;
var _c;
__turbopack_context__.k.register(_c, "MuseumLobby");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/question-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function QuestionCard({ question, userAnswer, showResult, onAnswer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-card to-card/50 border-2 border-primary/40 rounded-lg p-10 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
            }, void 0, false, {
                fileName: "[project]/components/question-card.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"
            }, void 0, false, {
                fileName: "[project]/components/question-card.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl font-black mb-10 text-accent text-balance tracking-tight leading-tight",
                        children: question.question
                    }, void 0, false, {
                        fileName: "[project]/components/question-card.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 mb-10",
                        children: question.options.map((option, index)=>{
                            const isSelected = userAnswer === index;
                            const isCorrect = index === question.correctAnswer;
                            const isWrong = isSelected && !isCorrect;
                            let className = "w-full p-5 text-left rounded-lg border-2 transition-all duration-300 font-semibold tracking-wide";
                            if (showResult && isCorrect) {
                                className += " border-primary/80 bg-primary/15 text-primary";
                            } else if (showResult && isWrong) {
                                className += " border-red-400/80 bg-red-500/10 text-red-300";
                            } else if (isSelected && !showResult) {
                                className += " border-secondary/80 bg-secondary/20 text-foreground";
                            } else if (showResult && isSelected) {
                                className += " border-muted-foreground/20 bg-muted/5 text-muted-foreground";
                            } else {
                                className += " border-border/50 bg-transparent text-foreground hover:border-primary/60 hover:bg-primary/10 cursor-pointer";
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>!showResult && onAnswer(index),
                                disabled: showResult,
                                className: className,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-4 text-xl font-black text-primary",
                                            children: [
                                                String.fromCharCode(65 + index),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/question-card.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: option
                                        }, void 0, false, {
                                            fileName: "[project]/components/question-card.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        showResult && isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto text-2xl",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/question-card.tsx",
                                            lineNumber: 61,
                                            columnNumber: 47
                                        }, this),
                                        showResult && isWrong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto text-2xl",
                                            children: "✗"
                                        }, void 0, false, {
                                            fileName: "[project]/components/question-card.tsx",
                                            lineNumber: 62,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/question-card.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/question-card.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/question-card.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    showResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-secondary/15 border-2 border-secondary/50 rounded-lg p-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-8 bg-secondary rounded-r"
                            }, void 0, false, {
                                fileName: "[project]/components/question-card.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/90 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black text-secondary mb-3 block uppercase tracking-wider",
                                        children: "Why?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/question-card.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    question.explanation
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/question-card.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/question-card.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/question-card.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/question-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = QuestionCard;
var _c;
__turbopack_context__.k.register(_c, "QuestionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/quiz-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$question$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/question-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const QUIZZES = {
    intro: [
        {
            id: 1,
            question: "What did the 19th Amendment, ratified in 1920, grant to American women?",
            options: [
                "The right to own property",
                "The right to vote",
                "The right to work in any profession",
                "The right to attend college"
            ],
            correctAnswer: 1,
            explanation: "The 19th Amendment, ratified in 1920, granted women the right to vote, marking a watershed moment in American history and women's suffrage."
        },
        {
            id: 2,
            question: "What was the 'New Woman' of the 1920s known for?",
            options: [
                "Following traditional Victorian values",
                "Staying at home and avoiding public life",
                "Cutting hair short, driving cars, and challenging social norms",
                "Avoiding education and professional work"
            ],
            correctAnswer: 2,
            explanation: "The 'New Woman' of the 1920s was characterized by her rejection of traditional constraints—she cut her hair short, raised hemlines, drove cars, smoked in public, and pursued education and careers."
        },
        {
            id: 3,
            question: "What major contradiction existed during the Roaring Twenties?",
            options: [
                "Women gained the vote but had no interest in politics",
                "Prohibition created an underground economy while jazz clubs flourished",
                "The stock market crashed at the beginning of the decade",
                "Technology declined while culture advanced"
            ],
            correctAnswer: 1,
            explanation: "The 1920s was marked by profound contradictions: while Prohibition aimed to eliminate alcohol, it actually created a thriving underground economy controlled by organized crime, even as jazz clubs and speakeasies flourished."
        },
        {
            id: 4,
            question: "What happened at the end of the Roaring Twenties that dramatically ended the era?",
            options: [
                "World War I began",
                "The stock market crashed, leading to economic collapse",
                "Prohibition was enacted",
                "The 19th Amendment was repealed"
            ],
            correctAnswer: 1,
            explanation: "The Roaring Twenties ended dramatically with the stock market crash of 1929, which led to the Great Depression and brought an abrupt end to the era's prosperity and cultural exuberance."
        }
    ],
    women: [
        {
            id: 1,
            question: "Which statement best explains how the expanding use of the typewriter in the 1920s changed the roles available to women in the workforce?",
            options: [
                "It limited women to factory jobs because companies no longer needed clerical workers.",
                "It opened new clerical and secretarial positions, giving women paid work and modest economic independence.",
                "It caused most women to leave the workforce because typing was considered 'too technical.'",
                "It led to equal pay between male and female office workers throughout the decade."
            ],
            correctAnswer: 1,
            explanation: "The typewriter revolutionized office work and created thousands of clerical and secretarial positions that became accessible to women, providing them with paid employment and a degree of economic independence previously unavailable."
        },
        {
            id: 2,
            question: "How did the rise of the 'flapper' challenge older ideas about how women were expected to behave in American society?",
            options: [
                "Flappers encouraged all women to stop working and stay at home.",
                "They rejected the new fashions of the era and promoted traditional Victorian dress.",
                "They represented a bold, visible break from traditional norms through clothing, behavior, and attitudes toward independence.",
                "They primarily focused on political activism rather than social or cultural expression."
            ],
            correctAnswer: 2,
            explanation: "Flappers challenged traditional gender norms through their distinctive fashion (short skirts, bobbed hair), behavior (smoking, drinking in public), and embrace of personal freedom and independence, representing a visible cultural revolution."
        },
        {
            id: 3,
            question: "Why was the passage of the 19th Amendment in 1920 considered a major turning point in the role of women in national life?",
            options: [
                "It immediately guaranteed women equal wages across all industries.",
                "It gave women the right to vote, expanding their political influence and encouraging broader civic participation.",
                "It required all women to join political parties.",
                "It replaced all male elected officials with female ones at the local level."
            ],
            correctAnswer: 1,
            explanation: "The 19th Amendment granted women the constitutional right to vote, marking a watershed moment that expanded their political influence and opened the door to greater civic participation and engagement in shaping national policy."
        },
        {
            id: 4,
            question: "How did the literary movements of the 1920s—such as the Harlem Renaissance and the broader modernist movement—create new opportunities and voices for women?",
            options: [
                "They restricted women writers to publishing only in newspapers.",
                "They encouraged women to focus solely on domestic themes and avoid political topics.",
                "They provided creative spaces for female authors to challenge social norms, explore identity, and gain national recognition.",
                "They discouraged experimentation, pushing all writers to follow strict, traditional storytelling styles."
            ],
            correctAnswer: 2,
            explanation: "The literary movements of the 1920s provided platforms for women writers to explore themes of identity, challenge social conventions, and experiment with new forms of expression, earning them national recognition and literary significance."
        }
    ],
    "leisure-tech": [
        {
            id: 1,
            question: "Which factor MOST directly explains why radio became America's first truly 'shared' national culture in the 1920s?",
            options: [
                "Radios made it easier for local communities to record their own music",
                "Radio broadcasts reached households simultaneously across the country",
                "Early radios had built-in phonographs so families could listen together",
                "Radio ownership was limited to major cities during the mid-1920s"
            ],
            correctAnswer: 1,
            explanation: "Radio broadcasts reached households simultaneously across the country, creating a shared national experience where people from different regions could listen to the same programs, news, and entertainment at the same time."
        },
        {
            id: 2,
            question: "Why did automobiles play a bigger role in spreading national pop culture than any other invention of the decade?",
            options: [
                "Cars allowed people to attend more political rallies to share ideas",
                "Cars were mostly bought by wealthy elites who shaped trends intentionally",
                "Cars reduced the need for electric appliances, freeing up more time for fun",
                "Cars allowed people to travel, access the same entertainment spots, and vacation widely"
            ],
            correctAnswer: 3,
            explanation: "Automobiles revolutionized mobility, allowing Americans to travel freely to entertainment venues, vacation destinations, and social gatherings across the country, thereby spreading cultural trends and creating a more unified national pop culture."
        },
        {
            id: 3,
            question: "Which statement BEST explains how women contributed to the spread of modern culture in the 1920s?",
            options: [
                "Women primarily stayed in domestic spaces and had little visibility in public life",
                "Women focused mostly on factory work, limiting their cultural impact",
                "Women used new political rights and public visibility to model modern attitudes and lifestyles",
                "Women's sports participation stayed small and mostly local"
            ],
            correctAnswer: 2,
            explanation: "Women leveraged their newly won political rights and increased public visibility to model modern attitudes and lifestyles, becoming influential cultural figures who helped define the era's values and social norms."
        },
        {
            id: 4,
            question: "Why did aviation—especially events like Charles Lindbergh's 1927 flight—become a major part of shared American culture?",
            options: [
                "Radio and film newsreels turned aviators into national heroes everyone followed",
                "Aviation allowed Americans to travel across the country cheaply and frequently",
                "Newspapers refused to cover aviation stories, making them mysterious and appealing",
                "Aviation was already the safest and most common form of transportation"
            ],
            correctAnswer: 0,
            explanation: "Radio broadcasts and film newsreels extensively covered aviation achievements like Lindbergh's transatlantic flight, transforming aviators into national heroes and celebrities that captured the public imagination across the entire country."
        }
    ],
    modernism: [
        {
            id: 1,
            question: "Art Deco's rise in the 1920s was largely influenced by which of the following?",
            options: [
                "A rejection of modernity and technology",
                "An interest in handcrafted rustic materials",
                "A cultural shift toward modernity, progress, and technological optimism",
                "A desire to eliminate decorative elements in design"
            ],
            correctAnswer: 2,
            explanation: "Art Deco emerged from a cultural shift toward modernity, progress, and technological optimism. The style celebrated modern materials, geometric forms, and the excitement of the machine age."
        },
        {
            id: 2,
            question: "Both The Great Gatsby and A Farewell to Arms explore the idea that post-WWI America was marked by:",
            options: [
                "Renewed optimism and confidence in society",
                "Deep disillusionment, loss, and questioning of meaning",
                "A celebration of moral values and spiritual clarity",
                "A universal belief in the American Dream"
            ],
            correctAnswer: 1,
            explanation: "Both novels capture the disillusionment of the post-war generation. Despite the prosperity and glamour of the surface, these works reveal deep questioning about meaning, morality, and the loss experienced by those who lived through World War I."
        },
        {
            id: 3,
            question: "Which statement best distinguishes Dadaism from Surrealism?",
            options: [
                "Dadaism was anti-art and nihilistic, while Surrealism explored the unconscious mind",
                "Dadaism embraced logic, while Surrealism rejected it",
                "Surrealism focused on realism, while Dadaism focused on dreams",
                "Surrealism rejected Freud, while Dadaism embraced him"
            ],
            correctAnswer: 0,
            explanation: "Dadaism was fundamentally anti-art and nihilistic, rejecting logic and reason in response to WWI's horrors. Surrealism, by contrast, embraced the unconscious mind and drew heavily on Freudian psychology to explore dreams and the irrational."
        },
        {
            id: 4,
            question: "How did the younger generation view jazz and new dances in the 1920s?",
            options: [
                "As boring and outdated",
                "As symbols of rebellion and modernity",
                "As strictly traditional",
                "As morally dangerous"
            ],
            correctAnswer: 1,
            explanation: "Jazz and new dances like the Charleston became powerful symbols of rebellion and modernity for the younger generation. They represented a break from Victorian restraint and embodied the spirit of the era's cultural revolution."
        }
    ],
    "culture-urban": [
        {
            id: 1,
            question: 'Which of the following correctly describes the region and "side" of the "Culture War" of the 1920s?',
            options: [
                "The North was against slavery and the South was for slavery.",
                "The east coast was anti-immigrants and anti-women and African American suffrage. The west coast, on the other hand, supported and welcomed immigrants and pushed for women and African Americans to get the right to vote.",
                "Urban areas/cities prioritized personal freedom, innovation, and industrialism. Rural communities, on the other hand, prioritized tradition, were resistant to change, and believed in moral discipline.",
                "Urban areas/cities prioritized tradition, were resistant to change, and believed in moral discipline. Rural communities, on the other hand, prioritized personal freedom, innovation, and industrialism."
            ],
            correctAnswer: 2,
            explanation: "The Culture War of the 1920s was fundamentally a conflict between urban and rural America. Urban areas embraced personal freedom and modern innovation, while rural communities prioritized tradition and moral discipline."
        },
        {
            id: 2,
            question: "What two factors BEST explains why so many people moved to urban areas during the 1920s?",
            options: [
                "Economic opportunities, more structured",
                "More jobs, less farming",
                "More freedom/equality, less dirty",
                "Economic opportunities, more freedom/equality"
            ],
            correctAnswer: 3,
            explanation: "People migrated to cities seeking both economic opportunities from industrial expansion and personal freedom that urban life offered—freedom from traditional constraints and the chance to participate in modern culture."
        },
        {
            id: 3,
            question: "Why were rural communities in such bad economic situations during the 1920s?",
            options: [
                "The urban people were stealing money from the rural citizens. They were scamming them.",
                "Even though there were a lot of technological innovations in the 1920s, there were no advances in agriculture or farming. Therefore, farming fell behind many industries, which was bad for the agrarian rural part of the country.",
                "People in rural communities did not care about money and the economy that much. They just managed their farm and did their own thing.",
                "New technology made farming faster, which caused there to be an oversupply of the crops that people who live in rural communities sell."
            ],
            correctAnswer: 3,
            explanation: "Mechanized farming technology increased productivity dramatically, leading to crop oversupply and falling agricultural prices. This left rural farmers struggling economically despite technological advances benefiting other industries."
        },
        {
            id: 4,
            question: 'Which events were the "battles" of the "Culture War" of the 1920s?',
            options: [
                "Scopes Trial, Prohibition",
                "Prohibition, Civil Rights",
                "Women's suffrage, Scopes Trial",
                "Harlem Renaissance, Women's suffrage"
            ],
            correctAnswer: 0,
            explanation: "The Scopes Trial (1925) centered on teaching evolution, challenging religious fundamentalism, while Prohibition (1920-1933) represented urban moral concerns clashing with rural values, making these two defining cultural battlegrounds of the era."
        }
    ]
};
function QuizPanel({ roomId, onComplete }) {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizComplete, setQuizComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const quiz = QUIZZES[roomId];
    if (!quiz) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-lg",
                children: "Quiz content coming soon"
            }, void 0, false, {
                fileName: "[project]/components/quiz-panel.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/quiz-panel.tsx",
            lineNumber: 301,
            columnNumber: 7
        }, this);
    }
    const question = quiz[currentQuestion];
    const userAnswer = answers[currentQuestion];
    const isCorrect = userAnswer === question.correctAnswer;
    const answeredAll = answers.length === quiz.length;
    const handleAnswer = (optionIndex)=>{
        if (showResult) return;
        const newAnswers = [
            ...answers
        ];
        newAnswers[currentQuestion] = optionIndex;
        setAnswers(newAnswers);
        setShowResult(true);
    };
    const handleNext = ()=>{
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setShowResult(false);
        } else {
            setQuizComplete(true);
        }
    };
    const correctCount = answers.filter((answer, index)=>answer === quiz[index].correctAnswer).length;
    if (quizComplete) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black border-2 border-amber-500/70 rounded-lg p-16 text-center relative overflow-hidden shadow-2xl shadow-amber-600/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500/60"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500/60"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500/60"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500/60"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: correctCount === quiz.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-600/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-5xl font-bold text-amber-400",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/quiz-panel.tsx",
                                                lineNumber: 353,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz-panel.tsx",
                                            lineNumber: 352,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz-panel.tsx",
                                        lineNumber: 351,
                                        columnNumber: 19
                                    }, this) : correctCount >= 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 mx-auto rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl font-black text-blue-400",
                                                children: "OK"
                                            }, void 0, false, {
                                                fileName: "[project]/components/quiz-panel.tsx",
                                                lineNumber: 359,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz-panel.tsx",
                                            lineNumber: 358,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz-panel.tsx",
                                        lineNumber: 357,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 mx-auto rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mb-4 shadow-lg shadow-red-600/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl font-black text-red-400",
                                                children: "TRY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/quiz-panel.tsx",
                                                lineNumber: 365,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz-panel.tsx",
                                            lineNumber: 364,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz-panel.tsx",
                                        lineNumber: 363,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-black mb-4 text-amber-400 uppercase tracking-wider",
                                    children: correctCount === quiz.length ? "Perfect! You've Escaped!" : correctCount >= 3 ? "Room Unlocked!" : "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-amber-50 mb-8",
                                    children: [
                                        "You answered ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 font-bold text-2xl",
                                            children: correctCount
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz-panel.tsx",
                                            lineNumber: 379,
                                            columnNumber: 30
                                        }, this),
                                        " out of",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 font-bold text-2xl",
                                            children: quiz.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz-panel.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        " questions correctly."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                correctCount === quiz.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onComplete,
                                    className: "px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 font-bold text-lg uppercase tracking-widest shadow-lg shadow-amber-600/40",
                                    children: "Proceed to Next Floor"
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCurrentQuestion(0);
                                        setAnswers([]);
                                        setShowResult(false);
                                        setQuizComplete(false);
                                    },
                                    className: "px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 font-bold text-lg uppercase tracking-widest shadow-lg shadow-amber-600/40",
                                    children: "Retry Quiz"
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/quiz-panel.tsx",
                    lineNumber: 336,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/quiz-panel.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/quiz-panel.tsx",
            lineNumber: 334,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-muted-foreground uppercase tracking-wider",
                                    children: [
                                        "Question ",
                                        currentQuestion + 1,
                                        " of ",
                                        quiz.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-primary font-bold uppercase tracking-wider",
                                    children: [
                                        Math.round((currentQuestion + 1) / quiz.length * 100),
                                        "% Complete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz-panel.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-muted/30 rounded-full overflow-hidden border border-primary/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-primary to-accent transition-all duration-300",
                                style: {
                                    width: `${(currentQuestion + 1) / quiz.length * 100}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-panel.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/quiz-panel.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$question$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: question,
                    userAnswer: userAnswer,
                    showResult: showResult,
                    onAnswer: handleAnswer
                }, void 0, false, {
                    fileName: "[project]/components/quiz-panel.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: currentQuestion === 0,
                            onClick: ()=>{
                                setCurrentQuestion(currentQuestion - 1);
                                setShowResult(false);
                            },
                            className: "px-6 py-2 text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors font-semibold uppercase tracking-wider text-sm",
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        showResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-bold uppercase tracking-wider",
                            children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Correct"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-panel.tsx",
                                lineNumber: 449,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: "Incorrect"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-panel.tsx",
                                lineNumber: 451,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !showResult,
                            onClick: handleNext,
                            className: "px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 transition-colors font-bold uppercase tracking-wider text-sm",
                            children: currentQuestion === quiz.length - 1 ? "View Results" : "Next"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-panel.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/quiz-panel.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/quiz-panel.tsx",
            lineNumber: 412,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/quiz-panel.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_s(QuizPanel, "d+Cx9f8RGKPPhVCnolyB3OiNdrY=");
_c = QuizPanel;
var _c;
__turbopack_context__.k.register(_c, "QuizPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/penthouse-flipbook.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PenthouseFlipbook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PENTHOUSE_PAGES = [
    {
        title: "The Roaring Twenties",
        content: "A Decade Defined by Economic Growth & Personal Freedom",
        type: "content"
    },
    {
        title: "Economic Transformation",
        content: "Many flocked to rapidly developing urbanized parts of America. Factory owners and industrial giants created more jobs through industry, manufacturing, and new technology like automobiles. Working hours decreased from 70 to 45 hours per week, while pay increased dramatically. This gave the average American more time and money for leisure activities.",
        type: "content"
    },
    {
        title: "The New Consumer Culture",
        content: "With extra time and money, people went to the cinema, bought radios, purchased appliances, and attended sports events. Motion pictures and radio allowed people to experience the thrill of emerging sports and aviation. These shared interests created a new unified pop culture across the nation.",
        type: "content"
    },
    {
        title: "Women's Revolutionary Role",
        content: "Women played a critical role in economic sectors using their newly gained rights and presence in society to break boundaries set upon them before. All these economic breakthroughs, political rights, and cultural emergence led to growth of personal freedom and equality for everyone.",
        type: "content"
    },
    {
        title: "Rural vs. Urban Divide",
        content: "Rural areas often prevented growth of personal freedom and equality due to their conservative economic and political decisions. The agricultural economy was in decline, and rural areas resisted mechanization and technologies that could have improved farming efficiency.",
        type: "content"
    },
    {
        title: "Urban Centers of Tolerance",
        content: "Cities were much more tolerant of different cultures and gave both women and minorities increased freedom and equality. This created a distinct city culture characterized by influences from many different cultures. The Harlem Renaissance emerged as a powerful example of new cultural expression.",
        type: "content"
    },
    {
        title: "Literary Disillusionment",
        content: "Writers who experienced World War I described the inequality and hopelessness of the period. Hemingway's 'A Farewell to Arms' highlighted conflict between patriotism, personal desire, and morality, influencing later discussions about war and national responsibility.",
        type: "content"
    },
    {
        title: "The Flapper Generation",
        content: "Women in the 1920s gained new forms of self-expression through the 'flapper' identity, which challenged traditional expectations. Many cut their hair short, drove cars, held jobs, and explored new freedoms. The 19th Amendment opened a new stage of the women's rights movement.",
        type: "content"
    },
    {
        title: "Question 1 of 4",
        content: "How did economic decisions in the 1920s promote personal freedom?",
        type: "question",
        options: [
            "Factory jobs decreased while working hours increased",
            "Factory jobs increased while working hours decreased from 70 to 45 hours per week",
            "Agricultural economy improved in rural areas",
            "Prohibition created more economic opportunities"
        ],
        correctAnswer: 1
    },
    {
        title: "Question 2 of 4",
        content: "What role did technology and entertainment play in creating pop culture?",
        type: "question",
        options: [
            "They isolated people from each other",
            "They allowed shared experiences through motion pictures and radio",
            "They prevented women from participating",
            "They only benefited rural areas"
        ],
        correctAnswer: 1
    },
    {
        title: "Question 3 of 4",
        content: "How did cities differ from rural areas in the 1920s?",
        type: "question",
        options: [
            "Rural areas were more tolerant of different cultures",
            "Cities rejected new technologies",
            "Cities were more tolerant of different cultures and minorities",
            "Rural areas had better economic opportunities"
        ],
        correctAnswer: 2
    },
    {
        title: "Question 4 of 4",
        content: "What symbol of female empowerment emerged in the 1920s?",
        type: "question",
        options: [
            "The suffragette movement only",
            "Rural farming cooperatives",
            "The 'flapper' identity with shorter hair, cars, and jobs",
            "Factory worker unions"
        ],
        correctAnswer: 2
    }
];
function PenthouseFlipbook({ onComplete }) {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswers, setSelectedAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const page = PENTHOUSE_PAGES[currentPage];
    const progress = (currentPage + 1) / PENTHOUSE_PAGES.length * 100;
    const handleNext = ()=>{
        if (currentPage < PENTHOUSE_PAGES.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrev = ()=>{
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleAnswerSelect = (optionIndex)=>{
        const newAnswers = [
            ...selectedAnswers
        ];
        newAnswers[currentPage] = optionIndex;
        setSelectedAnswers(newAnswers);
    };
    const handleFinish = ()=>{
        setShowResults(true);
    };
    const correctAnswers = selectedAnswers.filter((answer, index)=>{
        const questionPage = PENTHOUSE_PAGES[index + 8] // Questions start at index 8
        ;
        return questionPage && questionPage.type === "question" && answer === questionPage.correctAnswer;
    }).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-amber-300/70 text-xs uppercase tracking-widest font-light",
                                    children: [
                                        "Page ",
                                        currentPage + 1,
                                        " of ",
                                        PENTHOUSE_PAGES.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-amber-300/70 text-xs uppercase tracking-widest font-light",
                                    children: [
                                        Math.round(progress),
                                        "% Complete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/penthouse-flipbook.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 bg-slate-800 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/penthouse-flipbook.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/penthouse-flipbook.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "perspective",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-lg shadow-2xl border border-amber-500/20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-amber-500/10 px-8 py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-400/80 text-xs uppercase tracking-[0.3em] font-light mb-2",
                                        children: "Level 6 - The Penthouse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-flipbook.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-light tracking-wide text-amber-50 text-balance",
                                        children: page.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-flipbook.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 md:p-12 min-h-96 flex flex-col justify-center",
                                children: page.type === "content" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl leading-relaxed text-slate-100 font-light text-balance",
                                            children: page.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/penthouse-flipbook.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 pt-4",
                                            children: PENTHOUSE_PAGES.slice(0, 8).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-1 flex-1 rounded-full transition-colors ${idx === currentPage ? "bg-amber-400" : "bg-slate-700"}`
                                                }, idx, false, {
                                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/penthouse-flipbook.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl font-light text-slate-100 mb-8 text-balance",
                                            children: page.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/penthouse-flipbook.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: page.options?.map((option, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleAnswerSelect(idx),
                                                    className: `w-full p-4 rounded-lg border-2 text-left transition-all duration-200 font-light ${selectedAnswers[currentPage] === idx ? "border-amber-400 bg-amber-400/10 text-amber-50" : "border-slate-600 bg-slate-800/50 text-slate-200 hover:border-amber-400/50 hover:bg-slate-800"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedAnswers[currentPage] === idx ? "border-amber-400 bg-amber-400" : "border-slate-500"}`,
                                                                children: selectedAnswers[currentPage] === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-950 text-sm font-bold",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: option
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/penthouse-flipbook.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 25
                                                    }, this)
                                                }, idx, false, {
                                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/penthouse-flipbook.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/penthouse-flipbook.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-amber-500/10 px-8 py-6 flex justify-between items-center bg-slate-900/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePrev,
                                        disabled: currentPage === 0,
                                        className: "flex items-center gap-2 px-6 py-2 rounded-lg border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-light",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            "Previous"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/penthouse-flipbook.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    currentPage === PENTHOUSE_PAGES.length - 1 && !showResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleFinish,
                                        className: "px-8 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors font-light uppercase tracking-widest text-sm",
                                        children: "Submit Answers"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-flipbook.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this) : currentPage < PENTHOUSE_PAGES.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNext,
                                        className: "flex items-center gap-2 px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors font-light",
                                        children: [
                                            "Next",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/penthouse-flipbook.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/penthouse-flipbook.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/penthouse-flipbook.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 max-w-md text-center border border-amber-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-400 text-sm uppercase tracking-widest font-light mb-4",
                                children: "Quiz Complete"
                            }, void 0, false, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-4xl font-light text-amber-50 mb-2",
                                children: [
                                    correctAnswers,
                                    "/",
                                    PENTHOUSE_PAGES.length - 8
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300 text-sm mb-8",
                                children: correctAnswers === 4 ? "Perfect! You've mastered the Roaring Twenties!" : correctAnswers >= 3 ? "Excellent understanding of the era!" : "Good effort! Review the content and try again."
                            }, void 0, false, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onComplete,
                                className: "w-full px-6 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 rounded-lg transition-colors font-light uppercase tracking-widest",
                                children: "Complete Level"
                            }, void 0, false, {
                                fileName: "[project]/components/penthouse-flipbook.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/penthouse-flipbook.tsx",
                        lineNumber: 271,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/penthouse-flipbook.tsx",
                    lineNumber: 270,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/penthouse-flipbook.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/penthouse-flipbook.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(PenthouseFlipbook, "2NbosGCIC3oMbRDEK+VV65QjkjM=");
_c = PenthouseFlipbook;
var _c;
__turbopack_context__.k.register(_c, "PenthouseFlipbook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/penthouse-room.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PenthouseRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$penthouse$2d$flipbook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/penthouse-flipbook.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PenthouseRoom({ onComplete }) {
    _s();
    const [showFlipbook, setShowFlipbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (showFlipbook) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$penthouse$2d$flipbook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onComplete: onComplete
        }, void 0, false, {
            fileName: "[project]/components/penthouse-room.tsx",
            lineNumber: 10,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-amber-700 via-amber-600 to-amber-700 p-6 rounded-lg shadow-2xl border-4 border-amber-500/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-amber-900 to-amber-800 p-4 rounded",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/elegant-roaring-twenties-art-deco-luxury-penthouse.jpg",
                                            alt: "Roaring Twenties Penthouse",
                                            className: "w-full h-auto rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/components/penthouse-room.tsx",
                                            lineNumber: 26,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/penthouse-room.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/penthouse-room.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/penthouse-room.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/penthouse-room.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/penthouse-room.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/penthouse-room.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/penthouse-room.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                        children: "Level 6 - The Podcast Zone"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-6xl font-light tracking-wider text-amber-50 drop-shadow-lg",
                                        children: "The Roaring Twenties"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-400/80 text-lg font-light tracking-wide",
                                        children: "Personal Freedom & Cultural Transformation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/penthouse-room.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-px bg-gradient-to-r from-transparent to-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-amber-400 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-px bg-gradient-to-l from-transparent to-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/penthouse-room.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light",
                                children: "Discover how economic, political, and cultural decisions shaped personal freedom and equality. Navigate through history with our interactive flip-book experience."
                            }, void 0, false, {
                                fileName: "[project]/components/penthouse-room.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFlipbook(true),
                                        className: "inline-block px-16 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 rounded-lg transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/30 hover:shadow-amber-500/40 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/penthouse-room.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex items-center gap-2",
                                                children: "Open the Penthouse Library"
                                            }, void 0, false, {
                                                fileName: "[project]/components/penthouse-room.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-4",
                                        children: "8 pages of history • 4 reflection questions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/penthouse-room.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/penthouse-room.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/penthouse-room.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/penthouse-room.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/penthouse-room.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/penthouse-room.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(PenthouseRoom, "K4jmqqYhwIYvlq4GUMll4+zEORw=");
_c = PenthouseRoom;
var _c;
__turbopack_context__.k.register(_c, "PenthouseRoom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/room-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$penthouse$2d$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/penthouse-room.tsx [app-client] (ecmascript)");
"use client";
;
;
const ROOM_CONTENTS = {
    intro: {
        title: "The Roaring Culture",
        subtitle: "A Journey Begins",
        sections: []
    },
    women: {
        title: "Women of the 1920s",
        subtitle: "A Decade of Transformation"
    },
    "leisure-tech": {
        title: "Leisure & Technology",
        subtitle: "Innovation and Entertainment"
    },
    modernism: {
        title: "Modernism in Art & Literature",
        subtitle: "Artistic Revolution of the Era"
    },
    rural: {
        title: "Culture vs Urban Life",
        subtitle: "The Rural-Urban Divide"
    },
    penthouse: {
        title: "The Podcast Zone",
        subtitle: "Congratulation Screen and EQ Podcast"
    },
    "culture-urban": {
        title: "Culture vs Urban Life",
        subtitle: "The Rural-Urban Divide"
    }
};
function RoomContent({ roomId, onStartQuiz }) {
    const content = ROOM_CONTENTS[roomId];
    if (roomId === "penthouse") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$penthouse$2d$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onComplete: onStartQuiz
        }, void 0, false, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 46,
            columnNumber: 12
        }, this);
    }
    if (roomId === "culture-urban") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center space-y-12 px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                children: "Level 5"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/rural-women-culture.png",
                            alt: "Culture vs Urban Life",
                            className: "w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Begin The Quest"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://narayananj.wixsite.com/rural",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Visit Culture vs Urban Life →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "Interactive deep dive into the era"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Ready To Ascend"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartQuiz,
                                        className: "inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Test Your Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "4 questions • 2 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    if (!content) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 bg-slate-950",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 mb-4",
                    children: "Content for this room coming soon. Please provide a link to the V0 website for this room's content."
                }, void 0, false, {
                    fileName: "[project]/components/room-content.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onStartQuiz,
                    className: "mt-8 px-8 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors font-semibold uppercase tracking-wide",
                    children: "Start Quiz"
                }, void 0, false, {
                    fileName: "[project]/components/room-content.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    if (roomId === "rural") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center space-y-12 px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                children: "Level 5"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/rural-women-culture.png",
                            alt: "Culture vs Urban Life",
                            className: "w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Begin The Quest"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://narayananj.wixsite.com/rural",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Visit Culture vs Urban Life →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "Interactive deep dive into the era"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Ready To Ascend"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartQuiz,
                                        className: "inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Test Your Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "4 questions • 2 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    if (roomId === "modernism") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center space-y-12 px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                children: "Level 4"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/image.png",
                            alt: "Art Deco Modernism in Art and Literature",
                            className: "w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Begin The Quest"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://patildashna.wixsite.com/my-site-1",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Visit Modernism in Art & Literature →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "Interactive deep dive into the era"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Ready To Ascend"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartQuiz,
                                        className: "inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Test Your Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "4 questions • 2 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this);
    }
    if (roomId === "leisure-tech") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center space-y-12 px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                children: "Level 3"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/leisure-art-deco.jpg",
                            alt: "Art Deco Leisure and Technology",
                            className: "w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Begin The Quest"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://roaring20leisuretime.vercel.app/exhibit-sahya",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Visit Leisure & Technology →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "Interactive deep dive into the era"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Ready To Ascend"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartQuiz,
                                        className: "inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Test Your Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "4 questions • 2 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 241,
            columnNumber: 7
        }, this);
    }
    if (roomId === "women") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center space-y-12 px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                children: "Level 2"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/women-art-deco.png",
                            alt: "Art Deco Women of the 1920s",
                            className: "w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Begin The Quest"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://womenofthe1920s.vercel.app/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Visit Women of the 1920s →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "Interactive deep dive into the era"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Ready To Ascend"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartQuiz,
                                        className: "inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Test Your Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "4 questions • 2 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/room-content.tsx",
            lineNumber: 299,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-950 text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center",
                style: {
                    backgroundImage: `url('https://blob.v0.app/uYxdG.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 shadow-[inset_0_0_80px_rgba(217,119,6,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center space-y-6 px-4 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 100 100",
                                    className: "w-full h-full text-amber-400/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "50,10 60,40 50,50 40,40",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/room-content.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "35",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/room-content.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/room-content.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light",
                                children: "Explore the Exhibition"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-light tracking-wide text-amber-50/80 uppercase pt-2",
                                children: content.subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 pt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/art-deco-hero.jpeg",
                                    alt: "Art Deco Roaring Twenties Illustration",
                                    className: "w-full max-w-4xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/room-content.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-content.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-950 py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-300/80 text-sm uppercase tracking-[0.3em] font-light",
                                children: "A Preview"
                            }, void 0, false, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center rounded shadow-lg border-2 border-amber-500/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl md:text-6xl font-serif font-bold text-slate-950",
                                                    children: "T"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/room-content.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 pt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base md:text-lg text-slate-100 leading-relaxed font-light",
                                                    children: "he year 1920 was a watershed moment for American women. With the ratification of the 19th Amendment, millions stepped into polling booths for the first time to claim their voices in shaping the nation's future. What followed wasn't simply political; it was a cultural earthquake."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/room-content.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/room-content.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pl-8 border-l-4 border-amber-500/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg text-slate-100 leading-relaxed font-light",
                                        children: "Yet this decade of liberation and innovation was marked by profound contradictions. While jazz clubs and speakeasies flourished, Prohibition created an underground economy controlled by organized crime. As consumer goods became more accessible through mass production, factory workers endured monotonous labor conditions. The stock market soared to unprecedented heights, setting the stage for an economic collapse that would end the era as dramatically as it began."
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/room-content.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6",
                                        children: "Advance to Deeper Levels"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartQuiz,
                                        className: "inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative",
                                                children: "Test Your Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/room-content.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs uppercase tracking-wider font-light mt-3",
                                        children: "4 questions • 2 minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/room-content.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/room-content.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/room-content.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/room-content.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/room-content.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/room-content.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
_c = RoomContent;
var _c;
__turbopack_context__.k.register(_c, "RoomContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/room-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quiz-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/room-content.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RoomView({ roomId, onComplete, onExit, completedRooms }) {
    _s();
    const [quizStarted, setQuizStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120) // 2 minutes in seconds
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomView.useEffect": ()=>{
            if (!quizStarted) return;
            const timer = setInterval({
                "RoomView.useEffect.timer": ()=>{
                    setTimeLeft({
                        "RoomView.useEffect.timer": (prev)=>{
                            if (prev <= 1) {
                                clearInterval(timer);
                                return 0;
                            }
                            return prev - 1;
                        }
                    }["RoomView.useEffect.timer"]);
                }
            }["RoomView.useEffect.timer"], 1000);
            return ({
                "RoomView.useEffect": ()=>clearInterval(timer)
            })["RoomView.useEffect"];
        }
    }["RoomView.useEffect"], [
        quizStarted
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    if (quizStarted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/10"
                }, void 0, false, {
                    fileName: "[project]/components/room-view.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 z-50 border-b-2 border-primary/40 bg-card/95",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setQuizStarted(false);
                                    onExit();
                                },
                                className: "text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide text-sm",
                                children: "Exit Room"
                            }, void 0, false, {
                                fileName: "[project]/components/room-view.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-2xl font-bold ${timeLeft < 60 ? "text-red-500 animate-pulse" : "text-primary"}`,
                                children: formatTime(timeLeft)
                            }, void 0, false, {
                                fileName: "[project]/components/room-view.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/room-view.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/room-view.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        roomId: roomId,
                        onComplete: ()=>{
                            onComplete(roomId);
                            setQuizStarted(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/room-view.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/room-view.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/room-view.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-10 border-b-2 border-primary/40 bg-card/95 sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onExit,
                            className: "text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide text-sm",
                            children: "Back to Lobby"
                        }, void 0, false, {
                            fileName: "[project]/components/room-view.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-accent uppercase tracking-widest",
                            children: "Room Information"
                        }, void 0, false, {
                            fileName: "[project]/components/room-view.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20"
                        }, void 0, false, {
                            fileName: "[project]/components/room-view.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/room-view.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/room-view.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-12 relative z-10 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    roomId: roomId,
                    onStartQuiz: ()=>setQuizStarted(true)
                }, void 0, false, {
                    fileName: "[project]/components/room-view.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/room-view.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/room-view.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(RoomView, "NWbg7k6May67A17e9tMgQoAdHN4=");
_c = RoomView;
var _c;
__turbopack_context__.k.register(_c, "RoomView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/completion-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompletionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CompletionPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black flex items-center justify-center relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/final-escape.jpg",
                        alt: "1920s Art Deco mural",
                        className: "w-full h-full object-cover opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/components/completion-page.tsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
                    }, void 0, false, {
                        fileName: "[project]/components/completion-page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/completion-page.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl md:text-7xl lg:text-8xl font-black text-amber-400 uppercase tracking-wider mb-6 drop-shadow-2xl animate-pulse",
                                children: "Congratulations!"
                            }, void 0, false, {
                                fileName: "[project]/components/completion-page.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl md:text-3xl lg:text-4xl text-amber-50 font-light leading-relaxed drop-shadow-lg",
                                children: "on escaping the"
                            }, void 0, false, {
                                fileName: "[project]/components/completion-page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl md:text-4xl lg:text-5xl text-amber-300 font-bold uppercase tracking-wide mt-4 drop-shadow-lg",
                                children: "Smithsonian Roaring 20s Culture Museum"
                            }, void 0, false, {
                                fileName: "[project]/components/completion-page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/completion-page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-6 mt-12 text-amber-500/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-0.5 bg-gradient-to-r from-transparent to-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/components/completion-page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "◆"
                            }, void 0, false, {
                                fileName: "[project]/components/completion-page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-0.5 bg-gradient-to-l from-transparent to-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/components/completion-page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/completion-page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-amber-100/90 font-light italic drop-shadow-md",
                            children: "You've successfully navigated through the culture, innovation, and spirit of the 1920s"
                        }, void 0, false, {
                            fileName: "[project]/components/completion-page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/completion-page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/completion-page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-500/60"
            }, void 0, false, {
                fileName: "[project]/components/completion-page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-amber-500/60"
            }, void 0, false, {
                fileName: "[project]/components/completion-page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-amber-500/60"
            }, void 0, false, {
                fileName: "[project]/components/completion-page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-500/60"
            }, void 0, false, {
                fileName: "[project]/components/completion-page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/completion-page.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = CompletionPage;
var _c;
__turbopack_context__.k.register(_c, "CompletionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$museum$2d$lobby$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/museum-lobby.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/room-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$completion$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/completion-page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [currentRoom, setCurrentRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [completedRooms, setCompletedRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasEscaped, setHasEscaped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }["Home.useEffect"], [
        currentRoom,
        hasEscaped
    ]);
    const handleRoomComplete = (roomId)=>{
        const newCompletedRooms = [
            ...completedRooms,
            roomId
        ];
        setCompletedRooms(newCompletedRooms);
        if (roomId === "answers") {
            setHasEscaped(true);
        }
        setCurrentRoom(null);
    };
    const handleUnlockAll = ()=>{
        setCompletedRooms([
            "intro",
            "women",
            "leisure-tech",
            "modernism",
            "culture-urban"
        ]);
    };
    if (hasEscaped) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$completion$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    if (currentRoom) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            roomId: currentRoom,
            onComplete: handleRoomComplete,
            onExit: ()=>setCurrentRoom(null),
            completedRooms: completedRooms
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$museum$2d$lobby$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSelectRoom: setCurrentRoom,
                completedRooms: completedRooms
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleUnlockAll,
                className: "fixed bottom-4 right-4 px-2 py-1 bg-primary/50 text-xs rounded opacity-50 hover:opacity-100 transition-opacity z-50",
                children: "Unlock All"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "gATaL26TzWc3A3h4jA1yzlzFeeQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d96becb1._.js.map