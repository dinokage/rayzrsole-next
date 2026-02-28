import { LineChartIllustration } from "../../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const summary = [
  {
    name: "Fazri Analyser",
    status: "Active",
    uptime: "99.9%",
    latency: "3ms",
    perf: "+12.4%",
    efficiency: "+8.2%",
    reliability: "+5.1%",
    statusColor: "bg-emerald-500",
    changeType: "positive",
  },
  {
    name: "Zync HRMS",
    status: "Active",
    uptime: "100%",
    latency: "2ms",
    perf: "+24.6%",
    efficiency: "+18.9%",
    reliability: "+11.3%",
    statusColor: "bg-emerald-500",
    changeType: "positive",
  },
  {
    name: "NRGTech Platform",
    status: "Deployed",
    uptime: "99.8%",
    latency: "8ms",
    perf: "+3.2%",
    efficiency: "-1.4%",
    reliability: "+2.7%",
    statusColor: "bg-amber-500",
    changeType: "positive",
  },
]

export default function ServicePerformance() {
  return (
    <div className="h-150 shrink-0 overflow-hidden mask-[radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">Service Performance Overview</h3>
        <p className="mt-1 text-3xl font-semibold text-white">
          99.9% Uptime
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-400">+0.04% (last 30 days)</span>{" "}
          <span className="font-normal text-gray-500">across all services</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Service</TableHeaderCell>
                <TableHeaderCell className="text-right">Status</TableHeaderCell>
                <TableHeaderCell className="text-right">Uptime</TableHeaderCell>
                <TableHeaderCell className="text-right">Latency</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Performance
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Efficiency
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Reliability
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-100">
                    <div className="flex space-x-3">
                      <span
                        className={item.statusColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.status}</TableCell>
                  <TableCell className="text-right">{item.uptime}</TableCell>
                  <TableCell className="text-right">{item.latency}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {item.perf}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.efficiency.startsWith("+")
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {item.efficiency}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {item.reliability}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
