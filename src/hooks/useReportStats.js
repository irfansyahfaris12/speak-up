import { useQuery } from "@tanstack/react-query";
import { getReportStatsByUnit } from "../lib/function/report";

export function useReportStats(unit) {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["report-stats", unit],
    queryFn: async () => {
      const response = await getReportStatsByUnit(unit);
      if (!response.success) {
        throw new Error(response.message);
      }
      return response.result;
    },
    staleTime: 300000,
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!unit,
  });

  return {
    loading: isLoading,
    stats: data,
    refetch,
    error,
  };
}
